import { RECEIVE_POSTS,
	RECEIVE_POST,
	REMOVE_POST
} from '../actions/post_actions';
import merge from 'lodash/merge';

const PostReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_POST:
			newState[action.post.id] = action.post
			return newState

		case RECEIVE_POSTS:
      for (let key in action.posts) {
        newState[key] = action.posts[key];
      }
			return newState;

		case REMOVE_POST:
			delete newState[action.post.id];
			return newState;

		default:
			return state
	}
};

export default PostReducer;