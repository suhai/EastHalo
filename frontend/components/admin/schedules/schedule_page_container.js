import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedules from './Schedules';
import { fetchUsers } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	users: state.users
});

const mapDispatchToProps = dispatch => ({
	fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedules));