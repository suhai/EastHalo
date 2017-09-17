import { RECEIVE_MEALS,
	RECEIVE_MEAL,
	REMOVE_MEAL
 } from '../actions/meal_actions';
import merge from 'lodash/merge';

// const defaultState = { };
const MealReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_MEAL:
			newState[action.meal.id] = action.meal
			return newState

		case RECEIVE_MEALS:
      for (let key in action.meals) {
        newState[key] = action.meals[key];
      }
			return newState;

		case REMOVE_MEAL:
			delete newState[action.meal.id];
			return newState;

		default:
			return state
	}
};

export default MealReducer;