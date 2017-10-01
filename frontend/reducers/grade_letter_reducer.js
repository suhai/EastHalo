import { RECEIVE_GRADE_LETTERS,
	RECEIVE_GRADE_LETTER,
	REMOVE_GRADE_LETTER
} from '../actions/grade_letter_actions';
import merge from 'lodash/merge';

const GradeLetterReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_GRADE_LETTER:
			newState[action.grade_letter.id] = action.grade_letter
			return newState

		case RECEIVE_GRADE_LETTERS:
      for (let key in action.grade_letters) {
        newState[key] = action.grade_letters[key];
      }
			return newState;

		case REMOVE_GRADE_LETTER:
			delete newState[action.grade_letter.id];
			return newState;

		default:
			return state
	}
};

export default GradeLetterReducer;