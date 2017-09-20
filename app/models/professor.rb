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

class Professor < User
	has_many :courses
	has_many :grades, through: :courses
	has_many :students, through: :courses
	has_many :departments, through: :courses

	# def current_course_load
	# 	val = 0
	# 	self.courses.each do |course|
	# 		self.grades.each do |grade|
	# 			val += course.course_credit if grade.course_id != course.id
	# 		end
	# 	end
	# 	val
	# end
end
