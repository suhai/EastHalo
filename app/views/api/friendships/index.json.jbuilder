@friendships.each do |friendship|
  json.set! friendship.id do
		json.id friendship.id
		json.user_id friendship.user_id
		json.friend_id friendship.friend_id
		json.friender friendship.user.fname
		json.friended friendship.friend.fname
		json.friend_id friendship.friend_id
		json.created_at friendship.created_at
		json.updated_at friendship.updated_at
	end
end
