@cafetaria.each do |cafetarium|
  json.set! cafetarium.id do
		json.id cafetarium.id
		json.account cafetarium.account
		json.created_at cafetarium.created_at
		json.updated_at cafetarium.updated_at
	end
end

