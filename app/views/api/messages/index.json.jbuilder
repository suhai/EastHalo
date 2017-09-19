@messages.each do |message|
  json.set! message.id do
		json.id message.id
		json.sender message.sender
		json.subject message.subject
		json.email message.email
		json.msg message.msg
		json.created_at message.created_at
		json.updated_at message.updated_at
	end
end
