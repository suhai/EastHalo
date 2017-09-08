export const fetchComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}/comments`
  })
);

export const createComment = (comment) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${comment.post_id}/comments`,
    data: {comment}
  })
);

export const editComment = (comment) => (
  $.ajax({
    method: 'PATCH',
    url: `api/posts/${comment.post_id}/comments/${comment.id}`,
    data: {comment}
  })
)

export const deleteComment = (comment) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${comment.post_id}/comments/${comment.id}`
  })
);
