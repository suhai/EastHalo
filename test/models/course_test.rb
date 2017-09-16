# == Schema Information
#
# Table name: courses
#
#  id                 :integer          not null, primary key
#  title              :string
#  course_credit      :decimal(, )
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  professor_id       :integer
#  course_code        :string
#  course_description :text
#  course_cap         :integer
#  department_id      :integer
#  start_time         :time
#  end_time           :time
#

require 'test_helper'

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
