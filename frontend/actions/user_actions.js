import * as APIUtil from '../utils/user_api_utils';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
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

export const removeUser = user => ({
  type: REMOVE_USER,
  user
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

export const deleteUser = id => dispatch => (
  APIUtil.deleteUser(id)
  .then(user => dispatch(removeUser(user)))
);

export const fetchRandomUsers = query => dispatch => (
  APIUtil.fetchUsers(query)
    .then(users => dispatch(receiveUsers(users)))
);