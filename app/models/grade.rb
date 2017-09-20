# == Schema Information
#
# Table name: grades
#
#  id              :integer          not null, primary key
#  course_id       :integer
#  student_id      :integer
#  grade_letter_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  comment         :text
#

class Grade < ApplicationRecord
	validates :grade_letter_id, :presence => true
	validates :course_id, :presence => true
	validates :student_id, :presence => true, uniqueness: { scope: :course_id }
	belongs_to :course
	belongs_to :grade_letter
	belongs_to :student, class_name: :User, foreign_key: "student_id"
	before_create :ensure_student_is_in_course

	def ensure_student_is_in_course
	!!(Course.find(course_id).students).include?(Student.find(student_id))
	end
end
