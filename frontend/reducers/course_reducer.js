import { RECEIVE_COURSES,
	RECEIVE_COURSE,
	REMOVE_COURSE
} from '../actions/course_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const CourseReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_COURSE:
			newState[action.course.id] = action.course
			return newState

		case RECEIVE_COURSES:
      for (let key in action.courses) {
        newState[key] = action.courses[key];
      }
			return newState;

		case REMOVE_COURSE:
			delete newState[action.course.id];
			return newState;

		default:
			return state
	}
};

export default CourseReducer;