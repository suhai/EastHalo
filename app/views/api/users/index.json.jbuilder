@users.each do |user|
  json.set! user.id do
		json.id user.id
		json.type user.type
		json.fname user.fname
		json.lname user.lname
		json.dob user.dob
		json.username user.username
		json.email user.email
		json.bio user.bio
		json.profile_image_url user.profile_image_url
		json.course_credit user.course_credit
		json.cash_balance user.cash_balance
		json.is_admin user.is_admin
		json.created_at user.created_at
		json.updated_at user.updated_at
  end
end
