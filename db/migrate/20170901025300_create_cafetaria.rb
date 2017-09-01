class CreateCafetaria < ActiveRecord::Migration[5.1]
  def change
    create_table :cafetaria do |t|
      t.decimal :account

      t.timestamps
    end
  end
end
