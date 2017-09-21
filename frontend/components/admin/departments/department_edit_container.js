import { connect } from 'react-redux';
import { fetchDepartment, editDepartment } from '../../../actions/department_actions';
import DepartmentEditForm from './DepartmentEditForm';

const mapStateToProps = (state) => ({
	departments: state.departments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchDepartment: (id) => dispatch(fetchDepartment(id)),
	editDepartment: (data, id) => dispatch(editDepartment(data, id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DepartmentEditForm);