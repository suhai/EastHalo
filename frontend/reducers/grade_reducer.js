import { RECEIVE_GRADES,
	RECEIVE_GRADE,
	REMOVE_GRADE
} from '../actions/grade_actions';
import merge from 'lodash/merge';


const GradeReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_GRADE:
			newState[action.grade.id] = action.grade
			return newState

		case RECEIVE_GRADES:
      for (let key in action.grades) {
        newState[key] = action.grades[key];
      }
			return newState;

		case REMOVE_GRADE:
			delete newState[action.grade.id];
			return newState;

		default:
			return state
	}
};

export default GradeReducer;