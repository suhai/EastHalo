class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :publisher
      t.text :description
      t.decimal :price
      t.string :category

      t.timestamps
    end
  end
end
