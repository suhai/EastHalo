# == Schema Information
#
# Table name: transcripts
#
#  id         :integer          not null, primary key
#  student_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Transcript < ApplicationRecord
  belongs_to :student, :class_name => :User, :foreign_key => "student_id"
end
