import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCourse, fetchCourses, deleteCourse, editCourse } from '../../../actions/course_actions';
import Courses from './Courses';

const mapStateToProps = (state, ownProps) => ({
	courses: state.courses,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createCourse: data => dispatch(createCourse(data)),
	fetchCourses: () => dispatch(fetchCourses()),
	editCourse: id => dispatch(editCourse(id)),
  deleteCourse: id => dispatch(deleteCourse(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Courses));