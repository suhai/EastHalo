import { connect } from 'react-redux';
import { createCourse, fetchCourse, fetchCourses, editCourse } from '../../actions/course_actions';
import CourseEditForm from './CourseEditForm';

const mapStateToProps = (state) => ({
	courses: state.courses
});

const mapDispatchToProps = dispatch => ({
	editCourse: (data, id) => dispatch(editCourse(data, id)),
	fetchCourses: () => dispatch(fetchCourses()),
	fetchCourse: (id) => dispatch(fetchCourse(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseEditForm);