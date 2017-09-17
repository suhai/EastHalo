export const createFriendship = friendship => (
	$.ajax({
		method: 'POST',
		url: '/api/friendships',
		dataType: "json",
		data: friendship
	})
);

export const fetchFriendship = id => (
	$.ajax({
		method: 'GET',
		url: `api/friendships/${id}`
	})
);

export const fetchFriendships = query => {
	return $.ajax({
		method: 'GET',
		url: `api/friendships`,
	});
};


export const deleteFriendship = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/friendships/${id}`
	})
);