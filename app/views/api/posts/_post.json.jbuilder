json.set! post.id do
	json.id post.id
	json.title post.title
	json.body post.body
	json.user_id post.user_id
	json.comments post.comments
	json.created_at post.created_at
	json.updated_at post.updated_at
end