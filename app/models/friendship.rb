class Friendship < ApplicationRecord
  belongs_to :user
	belongs_to :friend, class_name: "User"
	
	after_create :create_inverse, unless: :has_inverse?
  after_destroy :destroy_inverse, if: :has_inverse?

  def create_inverse
    self.class.create(inverse_friendship_data)
  end

  def destroy_inverse
    inverse.destroy_all
  end

  def has_inverse?
    self.class.exists?(inverse_friendship_data)
  end

  def inverse
    self.class.where(inverse_friendship_data)
  end

  def inverse_friendship_data
    { friend_id: user_id, user_id: friend_id }
  end
end
