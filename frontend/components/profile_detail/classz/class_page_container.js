import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCourse, fetchCourses, deleteCourse, editCourse } from '../../../actions/course_actions';
import MyClasses from './MyClasses';

const mapStateToProps = (state, ownProps) => ({
	courses: state.courses,
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
)(MyClasses));