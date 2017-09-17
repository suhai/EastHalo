@course_enrollments.each do |course_enrollment|
  json.set! course_enrollment.id do
		json.id course_enrollment.id
		json.course_id course_enrollment.course_id
		json.student course_enrollment.student.lname
		json.professor course_enrollment.course.professor.lname
		json.course course_enrollment.course.course_code
		json.load course_enrollment.course.course_credit
		json.created_at course_enrollment.created_at
		json.updated_at course_enrollment.updated_at
	end
end
