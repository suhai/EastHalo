import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriendships, deleteFriendship } from '../../../actions/friendship_actions';
import Friendships from './Friendships';

const mapStateToProps = (state, ownProps) => ({
	friendships: state.friendships,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchFriendships: () => dispatch(fetchFriendships()),
  deleteFriendship: id => dispatch(deleteFriendship(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Friendships));