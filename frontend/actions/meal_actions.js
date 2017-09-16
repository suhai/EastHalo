import * as APIUtil from '../utils/meal_api_utils';
export const RECEIVE_MEAL = 'RECEIVE_MEAL';
export const RECEIVE_MEALS = 'RECEIVE_MEALS';
export const REMOVE_MEAL = 'REMOVE_MEAL';
export const MEAL_ERROR= 'MEAL_ERROR';
export const CLEAR_ERRORS= 'CLEAR_ERRORS';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';



export const receiveMeal = meal => ({
  type: RECEIVE_MEAL,
  meal
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveMeals = meals => ({
  type: RECEIVE_MEALS,
  meals
});

export const removeMeal = meal => ({
  type: REMOVE_MEAL,
  meal
});

export const MealError = error => ({
  type: MEAL_ERROR,
  error
})

//-----------------------------------------------------------------------------
// async actions
export const createMeal = data => dispatch => (
  APIUtil.createMeal(data)
  .then(meal =>  dispatch(receiveMeal(meal)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchMeals = () => dispatch => (
  APIUtil.fetchMeals()
    .then(meals => dispatch(receiveMeals(meals)))
);


export const fetchMeal = id => dispatch => (
	APIUtil.fetchMeal(id)
    .then(meal => dispatch(receiveMeal(meal)))
);

export const editMeal = (meal, id) => dispatch => (
  APIUtil.updateMeal(meal, id)
    .then(editedMeal => dispatch(receiveMeal(editedMeal)))
);

export const deleteMeal = id => dispatch => (
  APIUtil.deleteMeal(id)
  .then(meal => dispatch(removeMeal(meal)))
);