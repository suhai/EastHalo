# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  friend_id  :integer
#

class Friendship < ApplicationRecord
  belongs_to :user
	belongs_to :friend, class_name: "User"
	
	after_create :reciprocate, unless: :already_friends?
  after_destroy :disreciprocate, if: :already_friends?

  def reciprocate
    self.class.create(inverse_friendship_data)
  end

  def disreciprocate
    inverse.destroy_all
  end

  def already_friends?
    self.class.exists?(inverse_friendship_data)
  end

  def inverse
    self.class.where(inverse_friendship_data)
  end

  def inverse_friendship_data
    { friend_id: user_id, user_id: friend_id }
  end
end
