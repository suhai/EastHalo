// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { fetchCourse, editCourse, deleteCourse } from '../../actions/course_actions';
// import { createCourseEnrollment, fetchCourseEnrollments, deleteCourseEnrollment } from '../../actions/course_enrollment_actions';
// import CourseShow from './CourseShow';

// const mapStateToProps = (state, ownProps) => ({
// 	currentUser: state.session.currentUser,
// 	courses: state.courses,
// 	courseEnrollments: state.courseEnrollments
// });

// const mapDispatchToProps = dispatch => ({
//   fetchCourse: id => dispatch(fetchCourse(id)),
//   editCourse: (course, id) => dispatch(editCourse(course, id)),
// 	deleteCourse: id => dispatch(deleteCourse(id)),
// 	createCourseEnrollment: (data) => dispatch(createCourseEnrollment(data)),
// 	fetchCourseEnrollments: () => dispatch(fetchCourseEnrollments()),
// 	deleteCourseEnrollment: id => dispatch(deleteCourseEnrollment(id))
// });

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CourseShow));