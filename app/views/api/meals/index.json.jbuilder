@meals.each do |meal|
  json.set! meal.id do
		json.id meal.id
		json.name meal.name
		json.ingredients meal.ingredients
		json.price meal.price
		json.created_at meal.created_at
		json.updated_at meal.updated_at
	end
end