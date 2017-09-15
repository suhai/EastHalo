export const fetchUser = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  })
);

// export const fetchAllUsers = () => (
//  	$.ajax({
// 		method: 'GET',
// 		url: `api/users`
// 	})
// );

export const fetchUsers = query => {
  if (query === undefined) query = {};
  return $.ajax({
    method: 'GET',
		url: `api/users`,
		data: {
      query: query.query,
      user_id: query.user_id,
      search: query.search
    }
  });
};

export const updateUser = (user, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    dataType: "json",
    data: user
  })
);

export const deleteUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);