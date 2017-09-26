# == Schema Information
#
# Table name: news
#
#  id         :integer          not null, primary key
#  headline   :string
#  url        :text
#  date       :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

class News < ApplicationRecord
	validates :url, :headline, :presence => true
	after_initialize :set_defaults, unless: :persisted?
	
	def set_defaults
		self.image_url = 'https://res.cloudinary.com/swy/image/upload/v1499750293/images/parachute-skydiving-parachuting-jumping-128880.jpg'
	end	
end
