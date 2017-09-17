import { RECEIVE_COURSE_ENROLLMENTS,
	RECEIVE_COURSE_ENROLLMENT,
	REMOVE_COURSE_ENROLLMENT
} from '../actions/course_enrollment_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const CourseEnrollmentReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_COURSE_ENROLLMENT:
			newState[action.course_enrollment.id] = action.course
			return newState

		case RECEIVE_COURSE_ENROLLMENTS:
      for (let key in action.course_enrollments) {
        newState[key] = action.course_enrollments[key];
      }
			return newState;

		case REMOVE_COURSE_ENROLLMENT:
			delete newState[action.course_enrollment.id];
			return newState;

		default:
			return state
	}
};

export default CourseEnrollmentReducer;

