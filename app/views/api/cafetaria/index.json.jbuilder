@cafeteria.each do |cafeterium|
  json.set! cafeterium.id do
		json.id cafeterium.id
		json.account cafeterium.account
		json.created_at cafeterium.created_at
		json.updated_at cafeterium.updated_at
	end
end

