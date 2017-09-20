import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedule from './Schedule';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule));