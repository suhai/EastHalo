import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Admin from './Admin';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(
  connect(
  mapStateToProps,
	mapDispatchToProps)(Admin)
);
