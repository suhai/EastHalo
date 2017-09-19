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
	belongs_to :student, :class_name => :User, :foreign_key => "student_id"
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"

end
