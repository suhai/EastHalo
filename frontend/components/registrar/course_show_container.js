import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCourse, editCourse, deleteCourse } from '../../actions/course_actions';
import { login } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { createCourseEnrollment, fetchCourseEnrollments, deleteCourseEnrollment } from '../../actions/course_enrollment_actions';
import CourseShow from './CourseShow';
import { selectCourse } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	courses: state.courses,
	course: selectCourse(state, ownProps),
	course_enrollments: state.course_enrollments
});

const mapDispatchToProps = dispatch => ({
	login: user => dispatch(login(user)),
	fetchCourse: id => dispatch(fetchCourse(id)),
	fetchUser: id => dispatch(fetchUser(id)),
  editCourse: (course, id) => dispatch(editCourse(course, id)),
	deleteCourse: id => dispatch(deleteCourse(id)),
	createCourseEnrollment: (data) => dispatch(createCourseEnrollment(data)),
	fetchCourseEnrollments: () => dispatch(fetchCourseEnrollments()),
	deleteCourseEnrollment: id => dispatch(deleteCourseEnrollment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseShow));