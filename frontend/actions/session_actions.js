import * as APIUtil from '../utils/session_api_utils';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
//-----------------------------------------------------------------------------



export const signup = (user) => dispatch => {
  APIUtil.signup(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
};

export const login = user => dispatch => {
  APIUtil.login(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
};

export const logout = () => dispatch => {
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
};