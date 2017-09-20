class CreateNews < ActiveRecord::Migration[5.1]
  def change
    create_table :news do |t|
      t.string :headline
      t.text :url
      t.date :date

      t.timestamps
    end
  end
end
