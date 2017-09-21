export const makeComment = (comment, post_id) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${post_id}/comments`,
    data: {comment}
  })
);

export const fetchAllComments = () => (
  $.ajax({
    method: 'GET',
    url: `api/comments`
  })
);

export const fetchPostComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}/comments`
  })
);

export const fetchUserComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/comments`
  })
);

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  })
);

export const editComment = (comment, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${id}`,
    data: {comment}
  })
)

export const deleteComment = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);
