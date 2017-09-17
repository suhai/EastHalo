import { RECEIVE_BOOKS,
	RECEIVE_BOOK,
	REMOVE_BOOK
} from '../actions/book_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const BookReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_BOOK:
			newState[action.book.id] = action.book
			return newState

		case RECEIVE_BOOKS:
      for (let key in action.books) {
        newState[key] = action.books[key];
      }
			return newState;

		case REMOVE_BOOK:
			delete newState[action.book.id];
			return newState;

		default:
			return state
	}
};

export default BookReducer;