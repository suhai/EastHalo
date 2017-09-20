export const fetchComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}/comments`
  })
);

export const makeComment = (comment, post_id) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${post_id}/comments`,
    data: {comment}
  })
);

export const editComment = (comment, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/omments/${id}`,
    data: {comment}
  })
)

export const deleteComment = (comment, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);
