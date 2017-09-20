class RemoveCourseLoadFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :course_load, :numeric
  end
end
