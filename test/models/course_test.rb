# == Schema Information
#
# Table name: courses
#
#  id            :integer          not null, primary key
#  title         :string
#  course_credit :decimal(, )
#  start_time    :integer
#  end_time      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  professor_id  :integer
#  course_code   :string
#

require 'test_helper'

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
