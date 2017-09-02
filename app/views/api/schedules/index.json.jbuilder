@schedules.each do |schedule|
  json.set! schedule.id do
		json.id schedule.id
		json.user_id schedule.user_id
		json.created_at schedule.created_at
		json.updated_at schedule.updated_at
  end
end
