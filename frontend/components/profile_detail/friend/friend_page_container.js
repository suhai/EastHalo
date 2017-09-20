import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Friends from './Friends';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

export default withRouter(
  connect(
    mapStateToProps
)(Friends));