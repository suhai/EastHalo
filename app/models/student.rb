# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  fname             :string
#  lname             :string
#  dob               :date
#  username          :string
#  email             :string
#  password_digest   :string
#  session_token     :string
#  profile_image_url :string
#  bio               :text
#  course_credit     :decimal(, )
#  cash_balance      :decimal(, )
#  is_admin          :boolean
#  type              :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  gender            :string
#

class Student < User
	has_many :course_enrollments, dependent: :destroy
	has_many :courses, through: :course_enrollments
	has_many :departments, through: :courses
	has_many :professors, through: :courses
	has_one :transcript, dependent: :destroy
	has_many :grades, dependent: :destroy
	after_create :instantiate_student_transcript

	def instantiate_student_transcript
		Transcript.create(student_id: self.id)
	end

	def gpa
		total_units > 0 ? (total_credits.to_f / total_units) : 'NA'
	end

	def total_credits
		val = 0
		self.grades.each do |grade|
			val += (grade.grade_letter.weight * grade.course.course_credit)
		end
		val
	end

	def total_units
		val = 0
		self.courses.each do |course|
			val += course.course_credit
		end
		val
	end
end
