import * as APIUtil from '../utils/post_api_utils';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});


//-----------------------------------------------------------------------------
// async actions
export const createPost = data => dispatch => (
  APIUtil.createPost(data)
  .then(post =>  dispatch(receivePost(post)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);


export const fetchPost = id => dispatch => (
	APIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)))
);

export const editPost = (post, id) => dispatch => (
  APIUtil.updatePost(post, id)
    .then(editedPost => dispatch(receivePost(editedPost)))
);

export const deletePost = id => dispatch => (
  APIUtil.deletePost(id)
  .then(post => dispatch(removePost(post)))
);