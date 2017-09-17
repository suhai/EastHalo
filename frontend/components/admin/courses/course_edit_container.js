import { connect } from 'react-redux';
import { fetchCourse, fetchCourses, editCourse } from '../../../actions/course_actions';
import { fetchUsers } from '../../../actions/user_actions';
import { fetchDepartments } from '../../../actions/department_actions';
import CourseEditForm from './CourseEditForm';

const mapStateToProps = (state) => ({
	courses: state.courses,
	users: state.users,
	departments: state.departments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchCourses: () => dispatch(fetchCourses()),
	fetchCourse: (id) => dispatch(fetchCourse(id)),
	editCourse: (data, id) => dispatch(editCourse(data, id)),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchDepartments: () => dispatch(fetchDepartments()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseEditForm);