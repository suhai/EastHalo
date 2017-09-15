@departments.each do |department|
  json.set! department.id do
		json.id department.id
		json.name department.name
		json.courses department.courses
		json.professors department.professors
		json.students department.students
		json.created_at department.created_at
		json.updated_at department.updated_at
	end
end