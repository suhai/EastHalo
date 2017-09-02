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
	has_many :books
end
