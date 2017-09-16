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
	after_initialize :set_defaults, unless: :persisted?
	# has_many :meals

  def set_defaults
    self.account  ||= 0
  end	
end

