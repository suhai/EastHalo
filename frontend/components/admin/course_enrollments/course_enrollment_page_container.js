import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCourseEnrollments, deleteCourseEnrollment } from '../../../actions/course_enrollment_actions';
import CourseEnrollments from './CourseEnrollments';

const mapStateToProps = (state, ownProps) => ({
	course_enrollments: state.course_enrollments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchCourseEnrollments: () => dispatch(fetchCourseEnrollments()),
  deleteCourseEnrollment: id => dispatch(deleteCourseEnrollment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseEnrollments));