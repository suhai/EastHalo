import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCourse, fetchCourses, deleteCourse, editCourse, fetchCourse } from '../../actions/course_actions';
import Courses from './Courses';

const mapStateToProps = (state, ownProps) => ({
	courses: state.courses,
	form: state.form
});

const mapDispatchToProps = dispatch => ({
	createCourse: data => dispatch(createCourse(data)),
	fetchCourse: id => dispatch(fetchCourse(id)),
	fetchCourses: () => dispatch(fetchCourses()),
	editCourse: id => dispatch(editCourse(id)),
  deleteCourse: id => dispatch(deleteCourse(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Courses));