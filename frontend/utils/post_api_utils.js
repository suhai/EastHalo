export const createPost = post => (
	$.ajax({
		method: 'POST',
		url: '/api/posts',
		dataType: "json",
		data: post
	})
);

export const fetchPost = id => (
	$.ajax({
		method: 'GET',
		url: `api/posts/${id}`
	})
);

export const fetchPosts = query => {
	return $.ajax({
		method: 'GET',
		url: `api/posts`,
	});
};

export const updatePost = (post, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/posts/${id}`,
		dataType: "json",
		data: post
	})
);

export const deletePost = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/posts/${id}`
	})
);