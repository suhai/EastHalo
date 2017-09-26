# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  email      :string
#  subject    :string
#  msg        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  sender     :string
#

class Message < ApplicationRecord
	validates :sender, :email, :msg, :presence => true
end
