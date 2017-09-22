import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, editUser, deleteUser } from '../../actions/user_actions';
import { fetchFriendships, createFriendship, deleteFriendship } from '../../actions/friendship_actions';
import UserShow from './UserShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	users: state.users,
	frienships: state.friendships
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
	editUser: (user, id) => dispatch(editUser(user, id)),
	deleteUser: id => dispatch(deleteUser(id)),
	createFriendship: id => dispatch(createFriendship(id)),
	deleteFriendship: id => dispatch(deleteFriendship(id)),
	fetchFriendships: () => dispatch(fetchFriendships()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow));