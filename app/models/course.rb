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
	has_many :course_enrollments, dependent: :destroy
	has_many :students, through: :course_enrollments, :class_name => :User
	before_create :ensure_is_professor

	def ensure_is_professor
		!!Professor.find(self.professor_id)
	end

	def set_defaults
		self.course_credit  ||= 1.0
		self.start_time  ||= '9:00'
		self.end_time  ||= '10:00'
		self.course_cap ||= 25
	end	
end
