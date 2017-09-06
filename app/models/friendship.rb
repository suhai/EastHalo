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
	validates :user_id, :presence => true, uniqueness: { scope: :friend_id }
	validate :no_self_friending
	after_create :reciprocate
  after_destroy :disreciprocate
  belongs_to :user
	belongs_to :friend, class_name: "User"
	

  def no_self_friending
    if self.friend_id == self.user_id
      errors.add(:friend, "Find Some Real Friends")
    end
  end

  def reciprocate
		self.class.create(reciprocal_friendship_data)
  end

  def disreciprocate
		Friendship.where(reciprocal_friendship_data).delete_all 
  end
	#----------------------------------------------------------------------------

  def reciprocal_friendship_data
    { friend_id: user_id, user_id: friend_id }
  end
end