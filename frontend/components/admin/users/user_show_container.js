import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, editUser, deleteUser } from '../../../actions/user_actions';
import UserShow from './UserShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  editUser: (user, id) => dispatch(editUser(user, id)),
	deleteUser: id => dispatch(deleteUser(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow));