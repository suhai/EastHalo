@grade_letters.each do |grade_letter|
  json.set! grade_letter.id do
		json.id grade_letter.id
		json.letter grade_letter.letter
		json.weight grade_letter.weight
		json.created_at grade_letter.created_at
		json.updated_at grade_letter.updated_at
	end
end
