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

class Professor < User
	has_many :courses
	has_many :grades, through: :courses

	def students
		result = []
		Course.where(professor_id: self.id).each do |course|
			result += course.students
		end

		result.uniq
	end

	def courses
		Course.where(professor_id: self.id)
	end
end
