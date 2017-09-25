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
			newState[action.friendship.friend_id] = action.friendship
			return newState

		case RECEIVE_FRIENDSHIPS:
      for (let key in action.friendships) {
				const friendship = action.friendships[key]
        newState[friendship.friend_id] = friendship;
      }
			return newState;

		case REMOVE_FRIENDSHIP:
			delete newState[action.friendship.friend_id];
			return newState;

		default:
			return state
	}
};

export default FriendshipReducer;