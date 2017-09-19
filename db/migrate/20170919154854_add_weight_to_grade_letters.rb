class AddWeightToGradeLetters < ActiveRecord::Migration[5.1]
  def change
    add_column :grade_letters, :weight, :decimal
  end
end
