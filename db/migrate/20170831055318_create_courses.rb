class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.decimal :course_credit
      t.integer :start_time
      t.integer :end_time
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
