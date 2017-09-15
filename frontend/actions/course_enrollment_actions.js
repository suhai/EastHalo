import * as APIUtil from '../utils/course_enrollment_api_utils';
export const RECEIVE_COURSE_ENROLLMENT = 'RECEIVE_COURSE_ENROLLMENT';
export const RECEIVE_COURSE_ENROLLMENTS = 'RECEIVE_COURSE_ENROLLMENTS';
export const REMOVE_COURSE_ENROLLMENT = 'REMOVE_COURSE_ENROLLMENT';
export const COURSE_ENROLLMENT_ERROR= 'COURSE_ENROLLMENT_ERROR';
export const CLEAR_ERRORS= 'CLEAR_ERRORS';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';



export const receiveCourseEnrollment = course_enrollment => ({
  type: RECEIVE_COURSE_ENROLLMENT,
  course_enrollment
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCourseEnrollments = course_enrollments => ({
  type: RECEIVE_COURSE_ENROLLMENTS,
  course_enrollments
});

export const removeCourseEnrollment = course_enrollment => ({
  type: REMOVE_COURSE_ENROLLMENT,
  course_enrollment
});

export const CourseEnrollmentError = error => ({
  type: COURSE_ENROLLMENT_ERROR,
  error
})

//-----------------------------------------------------------------------------
// async actions
export const createCourseEnrollment = data => dispatch => (
  APIUtil.createCourseEnrollment(data)
  .then(courseEnrollment =>  dispatch(receiveCourseEnrollment(courseEnrollment)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchCourseEnrollments = () => dispatch => (
  APIUtil.fetchCourseEnrollments()
    .then(courseEnrollments => dispatch(receiveCourseEnrollments(courseEnrollments)))
);


export const fetchCourseEnrollment = id => dispatch => (
	APIUtil.fetchCourse(id)
    .then(courseEnrollment => dispatch(receiveCourseEnrollment(courseEnrollment)))
);

// export const editCourseEnrollment = (course_enrollment, id) => dispatch => (
//   APIUtil.updateCourseEnrollment(course_enrollment, id)
//     .then(editedCourseEnrollment => dispatch(receiveCourseEnrollment(editedCourseEnrollment)))
// );

export const deleteCourseEnrollment = id => dispatch => (
  APIUtil.deleteCourseEnrollment(id)
  .then(courseEnrollment => dispatch(removeCourseEnrollment(courseEnrollment)))
);