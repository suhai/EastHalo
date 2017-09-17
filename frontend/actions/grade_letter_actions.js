import * as APIUtil from '../utils/grade_letter_api_utils';
export const RECEIVE_GRADE_LETTER = 'RECEIVE_GRADE_LETTER';
export const RECEIVE_GRADE_LETTERS = 'RECEIVE_GRADE_LETTERS';
export const REMOVE_GRADE_LETTER = 'REMOVE_GRADE_LETTER';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';


export const receiveGradeLetter = grade_letter => ({
  type: RECEIVE_GRADE_LETTER,
  grade_letter
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveGradeLetters = grade_letters => ({
  type: RECEIVE_GRADE_LETTERS,
  grade_letters
});

export const removeGradeLetter = grade_letter => ({
  type: REMOVE_GRADE_LETTER,
  grade_letter
});

//-----------------------------------------------------------------------------
// async actions
export const createGradeLetter = data => dispatch => (
  APIUtil.createGradeLetter(data)
  .then(grade_letter =>  dispatch(receiveGradeLetter(grade_letter)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchGradeLetters = () => dispatch => (
  APIUtil.fetchGradeLetters()
    .then(grade_letters => dispatch(receiveGradeLetters(grade_letters)))
);


export const fetchGradeLetter = id => dispatch => (
	APIUtil.fetchGradeLetter(id)
    .then(grade_letter => dispatch(receiveGradeLetter(grade_letter)))
);

export const editGradeLetter = (grade_letter, id) => dispatch => (
  APIUtil.updateGradeLetter(grade_letter, id)
    .then(editedGrade_letter => dispatch(receiveGradeLetter(editedGrade_letter)))
);

export const deleteGradeLetter= id => dispatch => (
  APIUtil.deleteGradeLetter(id)
  .then(grade_letter => dispatch(removeGradeLetter(grade_letter)))
);