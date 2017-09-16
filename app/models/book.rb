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
#  image_url   :string
#

class Book < ApplicationRecord
	validates :title, :author, :publisher, :presence => true
	after_initialize :set_defaults, unless: :persisted?
	# belongs_to :bookstore
	# belongs_to :user

	def set_defaults
		self.price  ||= 0
	end	
end
