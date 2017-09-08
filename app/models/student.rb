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
#

class Student < User
	has_many :course_enrollments
  has_many :courses, through: :course_enrollments, dependent: :destroy
	has_one :transcript
	has_many :grades

	def professors
		profs = []
		self.courses.each do |course|
			profs << course.professor
		end	
		profs.uniq
	end

	def enroll_in(course)
		courses = self.courses
		students = course.students
		courses << course unless courses.include?(course)
		students << self unless students.include?(self)
	end

	def disenroll_from(course)
		self.courses.delete(course)
		course.students.delete(self)
	end	
end
