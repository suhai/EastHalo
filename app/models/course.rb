# == Schema Information
#
# Table name: courses
#
#  id            :integer          not null, primary key
#  title         :string
#  course_credit :decimal(, )
#  start_time    :integer
#  end_time      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  professor_id  :integer
#

class Course < ApplicationRecord
	after_initialize :set_defaults, unless: :persisted?
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"

	has_many :course_enrollments
  has_many :students, through: :course_enrollments, :class_name => :User,dependent: :destroy
	
	def enroll(student)
		students = self.students
		courses = student.courses
		students << student if student.type == 'Student' && !students.include?(student)
		courses << self unless courses.include?(self)
	end

	def disenroll(student)
		self.students.delete(student) 
		student.courses.delete(self)
	end

	def set_defaults
    self.course_credit  ||= 1
	end	

end
