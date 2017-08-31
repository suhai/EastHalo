@posts.each do |post|
  json.set! post.id do
		json.id post.id
		json.title post.title
		json.body post.body
		json.student_id post.student_id
		json.student_name Student.find_by(id: post.student_id).fname
		json.created_at post.created_at
		json.updated_at post.updated_at
  end
end
