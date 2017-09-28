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
#  cash_balance      :decimal(, )
#  is_admin          :boolean
#  type              :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  gender            :string
#  phone_number      :integer
#

class Professor < User
	has_many :courses, dependent: :destroy
	has_many :grades, through: :courses
	has_many :students, through: :courses
	has_many :departments, through: :courses

end
