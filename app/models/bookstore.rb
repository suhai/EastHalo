# == Schema Information
#
# Table name: bookstores
#
#  id         :integer          not null, primary key
#  account    :decimal(, )
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookstore < ApplicationRecord
	after_initialize :set_defaults, unless: :persisted?

  def set_defaults
    self.account  ||= 0
  end	
end
