# == Schema Information
#
# Table name: grades
#
#  id              :integer          not null, primary key
#  course_id       :integer
#  student_id      :integer
#  grade_letter_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class GradeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
