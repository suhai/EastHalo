import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createDepartment, fetchDepartments, deleteDepartment, editDepartment } from '../../../actions/department_actions';
import Departments from './Departments';

const mapStateToProps = (state, ownProps) => ({
	departments: state.departments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createDepartment: data => dispatch(createDepartment(data)),
	// fetchDepartments: () => dispatch(fetchDepartments()),
	editDepartment: id => dispatch(editDepartment(id)),
  deleteDepartment: id => dispatch(deleteDepartment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Departments));