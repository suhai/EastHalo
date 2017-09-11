class AddCourseCapToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :course_cap, :integer
  end
end
