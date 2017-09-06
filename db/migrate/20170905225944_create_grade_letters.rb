class CreateGradeLetters < ActiveRecord::Migration[5.1]
  def change
    create_table :grade_letters do |t|
      t.string :letter

      t.timestamps
    end
  end
end
