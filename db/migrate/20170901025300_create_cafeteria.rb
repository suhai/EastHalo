class CreateCafeteria < ActiveRecord::Migration[5.1]
  def change
    create_table :cafeteria do |t|
      t.decimal :account

      t.timestamps
    end
  end
end
