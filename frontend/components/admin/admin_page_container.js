import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Admin from './Admin';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
});

export default withRouter(
  connect(
    mapStateToProps,
)(Admin));