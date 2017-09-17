import * as APIUtil from '../utils/comment_api_utils';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})

export const editComment = comment => dispatch => (
  APIUtil.editComment(comment)
    .then(editComment => dispatch(receiveComment(editComment)))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)))
);

export const fetchComments = (id) => dispatch => (
  APIUtil.fetchComments(id)
    .then(comments => dispatch(receiveComments(comments)))
);

export const deleteComment = (comment) => dispatch => (
  APIUtil.deleteComment(comment)
    .then(deletedComment => dispatch(removeComment(deletedComment)))
);
