class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.references :course, foreign_key: true
      t.references :user, foreign_key: true
      t.references :grade_letter, foreign_key: true

      t.timestamps
    end
  end
end
