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
#

class Meal < ApplicationRecord
	after_initialize :set_defaults, unless: :persisted?
	belongs_to :cafetarium
	belongs_to :user

	def set_defaults
    self.price  ||= 5
	end	
end
