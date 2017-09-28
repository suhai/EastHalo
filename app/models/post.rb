# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

class Post < ApplicationRecord
	validates :user_id, :title, :body, :presence => true
  belongs_to :user
	has_many :comments, dependent: :destroy
	after_initialize :set_defaults, unless: :persisted?
	
	def set_defaults
		self.image_url ||= 'https://res.cloudinary.com/swy/image/upload/v1499750384/images/pexels-photo-156685.jpg'
	end
end
