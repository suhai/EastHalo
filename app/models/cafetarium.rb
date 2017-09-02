# == Schema Information
#
# Table name: cafetaria
#
#  id         :integer          not null, primary key
#  account    :decimal(, )
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cafetarium < ApplicationRecord
	has_many :meals
end
