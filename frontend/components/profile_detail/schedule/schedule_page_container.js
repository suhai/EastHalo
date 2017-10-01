import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCourses } from '../../../actions/course_actions';
import Schedule from './Schedule';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchCourses: () => dispatch(fetchCourses()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule));