@books.each do |book|
  json.set! book.id do
		json.id book.id
		json.title book.title
		json.author book.author
		json.publisher book.publisher
		json.description book.description
		json.price book.price
		json.category book.category
		json.created_at book.created_at
		json.updated_at book.updated_at
	end
end
