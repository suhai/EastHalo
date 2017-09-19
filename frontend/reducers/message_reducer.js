import { RECEIVE_MESSAGES,
	RECEIVE_MESSAGE,
	REMOVE_MESSAGE
 } from '../actions/message_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const MessageReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_MESSAGE:
			newState[action.message.id] = action.message
			return newState

		case RECEIVE_MESSAGES:
      for (let key in action.messages) {
        newState[key] = action.messages[key];
      }
			return newState;

		case REMOVE_MESSAGE:
			delete newState[action.message.id];
			return newState;

		default:
			return state
	}
};

export default MessageReducer;