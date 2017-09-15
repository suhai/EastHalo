import { RECEIVE_DEPARTMENTS,
	RECEIVE_DEPARTMENT,
	REMOVE_DEPARTMENT,
	DEPARTMENT_ERROR } from '../actions/department_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const DepartmentReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_DEPARTMENT:
			newState[action.department.id] = action.department
			return newState

		case RECEIVE_DEPARTMENTS:
      for (let key in action.departments) {
        newState[key] = action.departments[key];
      }
			return newState;

		case REMOVE_DEPARTMENT:
			delete newState[action.department.id];
			return newState;

		default:
			return state
	}
};

export default DepartmentReducer;