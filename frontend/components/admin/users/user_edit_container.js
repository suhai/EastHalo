import { connect } from 'react-redux';
import { fetchUser, fetchUsers, editUser } from '../../../actions/user_actions';
import UserEditForm from './UserEditForm';

const mapStateToProps = (state) => ({
	users: state.users,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchUsers: () => dispatch(fetchUsers()),
	fetchUser: (id) => dispatch(fetchUser(id)),
	editUser: (data, id) => dispatch(editUser(data, id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserEditForm);