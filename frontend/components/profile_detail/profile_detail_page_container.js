import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileDetail from './ProfileDetail';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
});

export default withRouter(
  connect(
    mapStateToProps,
)(ProfileDetail));