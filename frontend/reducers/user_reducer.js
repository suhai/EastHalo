import { RECEIVE_USER, RECEIVE_USERS, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;

    case RECEIVE_USERS:
      for (let key in action.users) {
        newState[key] = action.users[key];
      }
			return newState;

		case REMOVE_USER:
			delete newState[action.user.id];
			return newState;

    default:
      return state;
  }
};

export default UserReducer;
