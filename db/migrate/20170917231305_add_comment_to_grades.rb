class AddCommentToGrades < ActiveRecord::Migration[5.1]
  def change
    add_column :grades, :comment, :text
  end
end
