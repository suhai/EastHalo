export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
import * as UserUtil from '../utils/user_api_utils';

export const receiveUserData = users => ({
  type: RECEIVE_USER_DATA,
  users
});
//-----------------------------------------------------------------------------


export const fetchUsers = query => dispatch => {
  UserUtil.fetchUsers(query)
    .then(users => dispatch(receiveUserData(users)))
};