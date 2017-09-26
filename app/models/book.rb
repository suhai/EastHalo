# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string
#  author      :string
#  publisher   :string
#  description :text
#  price       :decimal(, )
#  category    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

class Book < ApplicationRecord
	validates :title, :author, :publisher, :presence => true
	after_initialize :set_defaults, unless: :persisted?

	def set_defaults
		self.price  ||= 0.99
		self.image_url = 'https://res.cloudinary.com/swy/image/upload/v1506309790/book12_itfeui.jpg'
	end	
end
