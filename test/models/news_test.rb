# == Schema Information
#
# Table name: news
#
#  id         :integer          not null, primary key
#  headline   :string
#  url        :text
#  date       :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

require 'test_helper'

class NewsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
