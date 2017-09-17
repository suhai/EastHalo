import * as APIUtil from '../utils/department_api_utils';
export const RECEIVE_DEPARTMENT = 'RECEIVE_DEPARTMENT';
export const RECEIVE_DEPARTMENTS = 'RECEIVE_DEPARTMENTS';
export const REMOVE_DEPARTMENT = 'REMOVE_DEPARTMENT';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';



export const receiveDepartment = department => ({
  type: RECEIVE_DEPARTMENT,
  department
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveDepartments = departments => ({
  type: RECEIVE_DEPARTMENTS,
  departments
});

export const removeDepartment = department => ({
  type: REMOVE_DEPARTMENT,
  department
});

//-----------------------------------------------------------------------------
// async actions
export const createDeartment = data => dispatch => (
  APIUtil.createDepartment(data)
  .then(department =>  dispatch(receiveDepartment(department)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchDepartments = () => dispatch => (
  APIUtil.fetchDepartments()
    .then(departments => dispatch(receiveDepartments(departments)))
);


export const fetchDepartment = id => dispatch => (
	APIUtil.fetchDepartment(id)
    .then(department => dispatch(receiveDepartment(department)))
);

export const editDepartment = (department, id) => dispatch => (
  APIUtil.updateDepartment(department, id)
    .then(editedDepartment => dispatch(receiveDepartment(editedDepartment)))
);

export const deleteDepartment= id => dispatch => (
  APIUtil.deleteDepartment(id)
  .then(department => dispatch(removeDepartment(department)))
);