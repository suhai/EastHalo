# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string
#  author      :string
#  publisher   :string
#  description :text
#  price       :decimal(, )
#  category    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
	after_initialize :set_defaults, unless: :persisted?
	belongs_to :bookstore

	def set_defaults
		self.price  ||= 0
	end	
end
