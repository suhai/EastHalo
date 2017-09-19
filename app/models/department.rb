# == Schema Information
#
# Table name: departments
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Department < ApplicationRecord
	validates :name, :presence => true
	has_many :courses, dependent: :destroy
	has_many :students, through: :courses
	has_many :professors, through: :courses
end
