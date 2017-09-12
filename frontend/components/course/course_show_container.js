import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCourse, editCourse, deleteCourse } from '../../actions/course_actions';
import CourseShow from './CourseShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	courses: state.courses,
});

const mapDispatchToProps = dispatch => ({
  fetchCourse: id => dispatch(fetchCourse(id)),
  editCourse: (course, id) => dispatch(editCourse(course, id)),
  deleteCourse: id => dispatch(deleteCourse(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseShow));