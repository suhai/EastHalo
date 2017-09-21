import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Transcript from './Transcript';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

export default withRouter(
  connect(
    mapStateToProps,
)(Transcript));
