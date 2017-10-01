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



export const fetchAllComments = () => dispatch => (
  APIUtil.fetchAllComments()
    .then(allComments => dispatch(receiveComments(allComments)))
);

export const fetchPostComments = (post_id) => dispatch => (
  APIUtil.fetchPostComments(post_id)
    .then(postComments => dispatch(receiveComments(postComments)))
);

export const fetchUserComments = (user_id) => dispatch => (
  APIUtil.fetchUserComments(user_id)
    .then(userComments => dispatch(receiveComments(userComments)))
);

export const fetchComment = (id) => dispatch => (
  APIUtil.fetchComment(id)
    .then(comment => dispatch(receiveComment(comment)))
);

export const makeComment = (comment, post_id) => dispatch => (
  APIUtil.makeComment(comment, post_id)
    .then(newComment => dispatch(receiveComment(newComment)))
);

export const editComment = comment => dispatch => (
  APIUtil.editComment(comment)
    .then(editComment => dispatch(receiveComment(editComment)))
);


export const deleteComment = (comment) => dispatch => (
  APIUtil.deleteComment(comment)
    .then(deletedComment => dispatch(removeComment(deletedComment)))
);

