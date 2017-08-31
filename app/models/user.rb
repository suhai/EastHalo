class User < ApplicationRecord
	# validates :username, :password_digest, :session_token, presence: true
  # validates :username, :session_token, uniqueness: true
  # validates :password, length: { minimum: 6, message: 'must be at least 6 characters'}, allow_nil: true

  # has_attached_file :profile_image_url,
  #   default_url: "http://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg",
  #   s3_protocol: :https

  # attr_reader :password

	# after_initialize :ensure_session_token
	

	### Only students can create posts. I had to work around this by altering the user_id column in my databse via postico. I added changed the user_id column  and index name fields to student_id. Then I uncommented out the has_many :posts  below, and instead moving it to the student model but not the professors model.###
	# has_many :posts
	
	scope :students, -> { where(type: 'Student') }
	scope :professors, -> { where(type: 'Professor') }

	has_many :friendships
	has_many :friends, through: :friendships, dependent: :destroy
	
	has_many :course_enrollments
  has_many :courses, through: :course_enrollments, dependent: :destroy

	has_many :courses
  
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
end
