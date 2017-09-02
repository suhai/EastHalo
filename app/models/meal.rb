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
	belongs_to :cafetarium
	belongs_to :user
end
