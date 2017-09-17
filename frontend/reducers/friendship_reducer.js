import { RECEIVE_FRIENDSHIP,
	RECEIVE_FRIENDSHIPS,
	REMOVE_FRIENDSHIP
} from '../actions/friendship_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const FriendshipReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_FRIENDSHIP:
			newState[action.friendship.id] = action.friendship
			return newState

		case RECEIVE_FRIENDSHIPS:
      for (let key in action.friendships) {
        newState[key] = action.friendships[key];
      }
			return newState;

		case REMOVE_FRIENDSHIP:
			delete newState[action.friendship.id];
			return newState;

		default:
			return state
	}
};

export default FriendshipReducer;