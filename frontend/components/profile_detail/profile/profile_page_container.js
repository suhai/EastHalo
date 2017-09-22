import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));