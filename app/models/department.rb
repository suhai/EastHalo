class Department < ApplicationRecord
	has_many :courses
	has_many :students, through: :courses, dependent: :destroy
	has_many :professors, through: :courses, dependent: :destroy
end
