import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

export default withRouter(
  connect(
    mapStateToProps,
)(Profile));