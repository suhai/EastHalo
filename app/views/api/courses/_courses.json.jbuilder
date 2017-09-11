json.set! course.id do
	json.id course.id
	json.title course.title
	json.course_credit course.course_credit
	json.start_time course.start_time
	json.end_time course.end_time
	json.professor_id course.professor_id
	json.students course.students
	json.created_at course.created_at
	json.updated_at course.updated_at
end
