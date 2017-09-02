class CourseEnrollment < ApplicationRecord
  belongs_to :course
	belongs_to :student, class_name: "User", :foreign_key => "student_id"
	before_create :ensure_eligibility

	def ensure_eligibility
		course_students = Course.find(course_id).students
		student_to_add = Student.find(student_id)
		if course_students.include?(student_to_add)
			course_students.delete(student_to_add)
		end
	end
end
