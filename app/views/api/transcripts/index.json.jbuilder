@transcripts.each do |transcript|
  json.set! transcript.id do
		json.id transcript.id
		json.student_id transcript.id
		json.created_at transcript.created_at
		json.updated_at transcript.updated_at
	end
end
