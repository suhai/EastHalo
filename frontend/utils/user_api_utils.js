export const fetchUser = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  })
);

export const fetchUsers = query => {
  if (query === undefined) query = {};
  return $.ajax({
    method: 'GET',
    url: `api/users`
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