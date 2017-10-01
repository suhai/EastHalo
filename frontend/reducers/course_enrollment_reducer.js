import { RECEIVE_COURSE_ENROLLMENTS,
	RECEIVE_COURSE_ENROLLMENT,
	REMOVE_COURSE_ENROLLMENT
} from '../actions/course_enrollment_actions';
import merge from 'lodash/merge';

const CourseEnrollmentReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_COURSE_ENROLLMENT:
			newState[action.course_enrollment.course_id] = action.course_enrollment
			return newState

		case RECEIVE_COURSE_ENROLLMENTS:
      for (let key in action.course_enrollments) {
				const enrollment = action.course_enrollments[key]
        newState[enrollment.course_id] = enrollment;
      }
			return newState;

		case REMOVE_COURSE_ENROLLMENT:
			delete newState[action.course_enrollment.course_id];
			return newState;

		default:
			return state
	}
};

export default CourseEnrollmentReducer;

