class Course < ApplicationRecord
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"

	has_many :course_enrollments
  has_many :students, through: :course_enrollments, :class_name => :User,dependent: :destroy
	
	def enroll(student)
		students = self.students
		courses = student.courses
		students << student unless students.include?(student)
		courses << self unless courses.include?(self)
	end

	def disenroll(student)
		self.students.delete(student) 
		student.courses.delete(self)
	end

end
