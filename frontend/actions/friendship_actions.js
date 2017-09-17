import * as APIUtil from '../utils/friendship_api_utils';
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';


export const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
});

export const removeFriendship = friendship => ({
  type: REMOVE_FRIENDSHIP,
  friendship
});

//-----------------------------------------------------------------------------
// async actions
export const createFriendship = data => dispatch => (
  APIUtil.createFriendship(data)
  .then(friendship =>  dispatch(receiveFriendship(friendship)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchFriendships = () => dispatch => (
  APIUtil.fetchFriendships()
    .then(friendships => dispatch(receiveFriendships(friendships)))
);


export const fetchFriendship = id => dispatch => (
	APIUtil.fetchFriendship(id)
    .then(friendship => dispatch(receiveFriendship(friendship)))
);

export const deleteFriendship= id => dispatch => (
  APIUtil.deleteFriendship(id)
  .then(friendship => dispatch(removeFriendship(friendship)))
);