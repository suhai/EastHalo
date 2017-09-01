class CreateBookstores < ActiveRecord::Migration[5.1]
  def change
    create_table :bookstores do |t|
      t.decimal :account

      t.timestamps
    end
  end
end
