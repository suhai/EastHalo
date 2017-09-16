export const createBook = book => (
	$.ajax({
		method: 'POST',
		url: '/api/books',
		dataType: "json",
		data: book
	})
);

export const fetchBook = id => (
	$.ajax({
		method: 'GET',
		url: `api/books/${id}`
	})
);

export const fetchBooks = query => {
	return $.ajax({
		method: 'GET',
		url: `api/books`,
	});
};

export const updateBook = (book, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/books/${id}`,
		dataType: "json",
		data: book
	})
);

export const deleteBook = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/books/${id}`
	})
);