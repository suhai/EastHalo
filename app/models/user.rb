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

class User < ApplicationRecord
	validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, message: 'must be at least 6 characters'}, allow_nil: true

  attr_reader :password
	after_initialize :ensure_session_token
	after_initialize :set_defaults, unless: :persisted?
	after_create :default_user_to_student_and_instantiate_schedule_and_transcript
	scope :students, -> { where(type: 'Student') }
	scope :professors, -> { where(type: 'Professor') }

	has_many :friendships, dependent: :destroy
	has_many :friends, through: :friendships
	has_many :posts, dependent: :destroy
	has_many :comments, dependent: :destroy
	has_one :schedule, dependent: :destroy

	def gpa
		'NA' unless self.type == 'Student'
	end

	def book_collections
		[]	
	end

	def buy_book(book)
		self.book_collection << book
		self.cash_balance -= book.price
		bookstore.account += book.price
	end

	def meal_purchase_history
		[]
	end

	def buy_meal(meal)
		self.meal_purchase_history << meal
		self.cash_balance -= meal.price
		cafeteria.account += cafeteria.price
	end


	def default_user_to_student_and_instantiate_schedule_and_transcript
		self.type ||= 'Student'
		Transcript.create(student_id: self.id) if self.type == 'Student'
		self.schedule ||= Schedule.create(user_id: self.id)
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
		self.fname ||= 'Alex'
		self.lname ||= 'Cargo'
		self.type ||= 'Student'
		self.phone_number ||= 1234567890
		self.email ||= `#{self.fname}@gmail.com`
		self.profile_image_url ||= 'https://res.cloudinary.com/swy/image/upload/v1499749857/images/student.svg'
		Transcript.create(student_id: self.id)
		Schedule.create(user_id: self.id)
		self.book_collections ||= []
		self.meal_purchase_history ||= []
	end	
end
