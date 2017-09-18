@grades.each do |grade|
	json.set! grade.id do
		json.id grade.id
		json.student grade.student
		json.professor grade.course.professor
		json.course grade.course
		json.grade_letter grade.grade_letter
		json.weight grade.course.course_credit
		json.comment grade.comment
		json.created_at grade.created_at
		json.updated_at grade.updated_at
	end
end
