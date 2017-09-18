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

class User < ApplicationRecord
	validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, message: 'must be at least 6 characters'}, allow_nil: true

  attr_reader :password
	after_initialize :ensure_session_token
	after_initialize :set_defaults, unless: :persisted?
	# after_create :instantiate_user_schedule
	
	scope :students, -> { where(type: 'Student') }
	scope :professors, -> { where(type: 'Professor') }

	has_many :friendships
	has_many :friends, through: :friendships, dependent: :destroy
	has_many :posts
	has_many :comments
	# has_many :books
	# has_many :meals
	has_one :schedule


	def instantiate_user_schedule
		Schedule.create(user_id: self.id)
	end

#---------------------------------------------------------------------------
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_user_credentials(username, password)
    user = User.find_by(username: username)
    return user if (user && user.password?(password))
    nil
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
	
	def set_defaults
		self.cash_balance  ||= 0
		self.course_credit  ||= 0
	end	
end
