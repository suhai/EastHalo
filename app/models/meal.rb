# == Schema Information
#
# Table name: meals
#
#  id          :integer          not null, primary key
#  name        :string
#  ingredients :text
#  price       :decimal(, )
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

class Meal < ApplicationRecord
	after_initialize :set_defaults, unless: :persisted?
	
	def set_defaults
		self.price  ||= 5
		self.image_url ||= 'https://res.cloudinary.com/swy/image/upload/v1506310612/food14_oeahvi.jpg'
	end	
end
