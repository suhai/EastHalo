class CourseEnrollment < ApplicationRecord
  belongs_to :course
	belongs_to :student, class_name: "User", :foreign_key => "user_id"
	

	after_create :create_reciprocal, unless: :already_created?
  after_destroy :remove_reciprocal, if: :already_created?

	def create_reciprocal
		if self.class == 'Course'
			Student.find(self.students.last.student_id).courses << self
		elsif self.class == 'Student'
			Course.find(self.courses.last.course_id).students << self
		end
	end

	def remove_reciprocal
		# if self.class == 'Course'
		# 	Student.find(self.students.last.student_id).courses.delete(self)
		# elsif self.class == 'Student'
		# 	Course.find(self.courses.last.course_id).students.delete(self)
		# end
	end

	def already_created?
		# Professor.find(self.professor_id).courses.include?(self)
	end
end
