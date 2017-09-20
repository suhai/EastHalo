@all_news.each do |news|
  json.set! news.id do
		json.id news.id
		json.headline news.headline
		json.url news.url
		json.date news.date
		json.created_at news.created_at
		json.updated_at news.updated_at
	end
end
