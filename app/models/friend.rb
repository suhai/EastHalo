# == Schema Information
#
# Table name: friends
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord
	has_many :users, through: :friendships
end
