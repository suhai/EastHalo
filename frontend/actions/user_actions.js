import * as APIUtil from '../utils/user_api_utils';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RANDOM_USERS = 'RANDOM_USERS';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveRandomUsers = users => ({
  type: RANDOM_USERS,
  users
});
//-----------------------------------------------------------------------------


export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
);

export const editUser = (user, id) => dispatch => (
  APIUtil.updateUser(user, id)
    .then(editedUser => dispatch(receiveUser(editedUser)))
);