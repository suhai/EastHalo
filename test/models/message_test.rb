# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  subject    :string
#  msg        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end