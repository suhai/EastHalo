import * as APIUtil from '../utils/grade_api_utils';
export const RECEIVE_GRADE = 'RECEIVE_GRADE';
export const RECEIVE_GRADES = 'RECEIVE_GRADES';
export const REMOVE_GRADE = 'REMOVE_GRADE';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';



export const receiveGrade = grade => ({
  type: RECEIVE_GRADE,
  grade
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveGrades = grades => ({
  type: RECEIVE_GRADES,
  grades
});

export const removeGrade = grade => ({
  type: REMOVE_GRADE,
  grade
});


//-----------------------------------------------------------------------------
// async actions
export const createGrade = data => dispatch => (
  APIUtil.createGrade(data)
  .then(grade =>  dispatch(receiveGrade(grade)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchGrades = () => dispatch => (
  APIUtil.fetchGrades()
    .then(grades => dispatch(receiveGrades(grades)))
);


export const fetchGrade = id => dispatch => (
	APIUtil.fetchGrade(id)
    .then(grade => dispatch(receiveGrade(grade)))
);

export const editGrade = (grade, id) => dispatch => (
  APIUtil.updateGrade(grade, id)
    .then(editedGrade => dispatch(receiveGrade(editedGrade)))
);

export const deleteGrade = id => dispatch => (
  APIUtil.deleteGrade(id)
  .then(grade => dispatch(removeGrade(grade)))
);