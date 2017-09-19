class RenameColumn < ActiveRecord::Migration[5.1]
	def change
		rename_column :users, :course_credit, :course_load
	end
end
