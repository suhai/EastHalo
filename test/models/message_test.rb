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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
