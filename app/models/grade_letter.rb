# == Schema Information
#
# Table name: grade_letters
#
#  id         :integer          not null, primary key
#  letter     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  weight     :decimal(, )
#

class GradeLetter < ApplicationRecord
	validates :letter, :presence => true, :uniqueness => true
	has_many :grades
end
