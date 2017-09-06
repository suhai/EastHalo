# == Schema Information
#
# Table name: schedules
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Schedule < ApplicationRecord
	validates :user_id, :presence => true, :uniqueness => true
	belongs_to :user
	before_create :ensure_no_duplicate
	
	def ensure_no_duplicate
		!User.find(self.user_id).schedule
	end
end
