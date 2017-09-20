import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import ScheduleShow from './ScheduleShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	users: state.users
});

const mapDispatchToProps = dispatch => ({
	fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleShow));