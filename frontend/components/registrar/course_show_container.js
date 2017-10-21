import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCourse, fetchCourses, editCourse, deleteCourse } from '../../actions/course_actions';
import { fetchUser } from '../../actions/user_actions';
import { createCourseEnrollment, fetchCourseEnrollments, deleteCourseEnrollment } from '../../actions/course_enrollment_actions';
import CourseShow from './CourseShow';
import { selectCourse } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	courses: state.courses,
	course_enrollments: state.course_enrollments
});

const mapDispatchToProps = dispatch => ({
	fetchCourse: id => dispatch(fetchCourse(id)),
	fetchCourses: () => dispatch(fetchCourses()),
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