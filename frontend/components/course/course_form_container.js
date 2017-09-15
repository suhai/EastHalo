import { connect } from 'react-redux';
import { createCourse, fetchCourse, fetchCourses, editCourse } from '../../actions/course_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchDepartments } from '../../actions/department_actions';
import CourseForm from './CourseForm';

const mapStateToProps = (state) => ({
	courses: state.courses,
	users: state.users,
	departments: state.departments,
});

const mapDispatchToProps = dispatch => ({
	createCourse: data => dispatch(createCourse(data)),
	fetchCourses: () => dispatch(fetchCourses()),
	fetchCourse: (id) => dispatch(fetchCourse(id)),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchDepartments: () => dispatch(fetchDepartments()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseForm);