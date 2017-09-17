import * as APIUtil from '../utils/course_api_utils';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';
export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const REMOVE_COURSE = 'REMOVE_COURSE';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';



export const receiveCourse = course => ({
  type: RECEIVE_COURSE,
  course
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses
});

export const removeCourse = course => ({
  type: REMOVE_COURSE,
  course
});


//-----------------------------------------------------------------------------
// async actions
export const createCourse = data => dispatch => (
  APIUtil.createCourse(data)
  .then(course =>  dispatch(receiveCourse(course)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchCourses = () => dispatch => (
  APIUtil.fetchCourses()
    .then(courses => dispatch(receiveCourses(courses)))
);


export const fetchCourse = id => dispatch => (
	APIUtil.fetchCourse(id)
    .then(course => dispatch(receiveCourse(course)))
);

export const editCourse = (course, id) => dispatch => (
  APIUtil.updateCourse(course, id)
    .then(editedCourse => dispatch(receiveCourse(editedCourse)))
);

export const deleteCourse = id => dispatch => (
  APIUtil.deleteCourse(id)
  .then(course => dispatch(removeCourse(course)))
);