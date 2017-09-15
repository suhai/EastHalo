import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createDepartment, fetchDepartments, deleteDepartment, editDepartment } from '../../actions/department_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchCourses } from '../../actions/course_actions';
import Departments from './Departments';

const mapStateToProps = (state, ownProps) => ({
	departments: state.departments,
	users: state.users,
	courses: state.courses,
});

const mapDispatchToProps = dispatch => ({
	createDepartment: data => dispatch(createDepartment(data)),
	fetchDepartments: () => dispatch(fetchDepartments()),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchCourses: () => dispatch(fetchCourses()),
	editDepartment: id => dispatch(editDepartment(id)),
  deleteDepartment: id => dispatch(deleteDepartment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Departments));