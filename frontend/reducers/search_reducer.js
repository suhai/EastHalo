import { RECEIVE_USER_DATA} from "../actions/search_actions";
import merge from 'lodash/merge';

const _defaultState = {
  users: {}
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER_DATA:
      newState.users = action.users;
      return newState;

    default:
      return state;
  }
};

export default SearchReducer;