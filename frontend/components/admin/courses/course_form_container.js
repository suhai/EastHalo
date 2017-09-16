import { connect } from 'react-redux';
import { createCourse, fetchCourses } from '../../actions/course_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchDepartments } from '../../actions/department_actions';
import CourseForm from './CourseForm';

const mapStateToProps = (state) => ({
	courses: state.courses,
	users: state.users,
	departments: state.departments,
});

const mapDispatchToProps = dispatch => ({
	createCourse: (data) => dispatch(createCourse(data)),
	fetchCourses: () => dispatch(fetchCourses()),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchDepartments: () => dispatch(fetchDepartments()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseForm);