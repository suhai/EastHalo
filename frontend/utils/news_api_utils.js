export const createNews = news=> (
	$.ajax({
		method: 'POST',
		url: '/api/news',
		dataType: "json",
		data: news	})
);

export const fetchAllNews = id => (
	$.ajax({
		method: 'GET',
		url: 'api/news'
	})
);

export const fetchNews = id => (
	$.ajax({
		method: 'GET',
		url: `api/news/${id}`
	})
);

export const updateNews = (news, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/news/${id}`,
		dataType: "json",
		data: news	
	})
);

export const deleteNews = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/news/${id}`
	})
);