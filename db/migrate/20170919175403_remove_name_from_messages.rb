class RemoveNameFromMessages < ActiveRecord::Migration[5.1]
	def change
		remove_column :messages, :name, :string
	end
end
