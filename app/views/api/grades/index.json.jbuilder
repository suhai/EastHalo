@grades.each do |grade|
	json.set! grade.id do
		json.id grade.id
		json.course_id grade.course_id
		json.student_id grade.student_id
		json.letter grade.grade_letter.letter
		json.created_at grade.created_at
		json.updated_at grade.updated_at
	end
end
