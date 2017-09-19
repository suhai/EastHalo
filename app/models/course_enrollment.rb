# == Schema Information
#
# Table name: course_enrollments
#
#  id         :integer          not null, primary key
#  course_id  :integer
#  student_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CourseEnrollment < ApplicationRecord
	validates :course_id, :presence => true
	validates :student_id, :presence => true, uniqueness: { scope: :course_id }
  belongs_to :course
	belongs_to :student, class_name: "User", :foreign_key => "student_id"
	before_create :ensure_is_student
	after_create :update_student_load
	after_destroy :re_update_student_load
	
	def ensure_is_student
		!!Student.find(self.student_id)
	end

	def update_student_load
		course = Course.find(self.course_id)
		student = Student.find(self.student_id)
		student.course_load += course.course_credit
	end

	def re_update_student_load
		course = Course.find(self.course_id)
		student = Student.find(self.student_id)
		student.course_load -= course.course_credit
	end
end
