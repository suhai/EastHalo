class Course < ApplicationRecord
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"

	has_many :course_enrollments
  has_many :students, through: :course_enrollments, :class_name => :User,dependent: :destroy

	after_create :add_self_to_professor_courses, unless: :already_in_it?
  after_destroy :remove_self_to_professor_courses, if: :already_in_it?

	def add_self_to_professor_courses
		Professor.find(self.professor_id).courses << self
	end

	def remove_self_to_professor_courses
		Professor.find(self.professor_id).courses.delete(self)
	end

	def already_in_it?
		Professor.find(self.professor_id).courses.include?(self)
	end
end
