class Meal < ApplicationRecord
	belongs_to :cafetarium
	belongs_to :user
end
