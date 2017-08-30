class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.date :dob
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.string :profile_image_url
      t.text :bio
      t.integer :course_credit
      t.integer :cash_balance
      t.boolean :is_admin
      t.string :type

      t.timestamps
    end
  end
end
