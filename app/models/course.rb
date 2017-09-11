# == Schema Information
#
# Table name: courses
#
#  id                 :integer          not null, primary key
#  title              :string
#  course_credit      :decimal(, )
#  start_time         :integer
#  end_time           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  professor_id       :integer
#  course_code        :string
#  course_description :text
#  course_cap         :integer
#

class Course < ApplicationRecord
	validates :professor_id, :presence => true
	validates :title, :presence => true
	after_initialize :set_defaults, unless: :persisted?
	# before_create :ensure_is_professor
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"
	has_many :grades
	has_many :course_enrollments
  has_many :students, through: :course_enrollments, :class_name => :User,dependent: :destroy

	def set_defaults
		self.course_credit  ||= 1.0
		self.start_time  ||= 1100
		self.end_time  ||= 1200
	end	
		
	# def ensure_is_professor
	# 	!!Professor.find(self.professor_id)
	# end
end
