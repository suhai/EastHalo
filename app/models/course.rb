# == Schema Information
#
# Table name: courses
#
#  id                 :integer          not null, primary key
#  title              :string
#  course_credit      :decimal(, )
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  professor_id       :integer
#  course_code        :string
#  course_description :text
#  course_cap         :integer
#  department_id      :integer
#  start_time         :time
#  end_time           :time
#

class Course < ApplicationRecord
	validates :professor_id, :presence => true
	validates :department_id, :presence => true
	validates :title, :presence => true
	after_initialize :set_defaults, unless: :persisted?
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"
	has_many :grades
	belongs_to :department
	has_many :course_enrollments
  has_many :students, through: :course_enrollments, :class_name => :User,dependent: :destroy

	def set_defaults
		self.course_credit  ||= 1.0
		self.start_time  ||= 0900
		self.end_time  ||= 1000
	end	
end
