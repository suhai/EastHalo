import { connect } from 'react-redux';
import { createCourse, fetchCourse, fetchCourses, editCourse } from '../../actions/course_actions';
import CourseForm from './CourseForm';

const mapStateToProps = (state) => ({
  courses: state.courses
});

const mapDispatchToProps = dispatch => ({
  createCourse: data => dispatch(createCourse(data)),
  fetchCourses: () => dispatch(fetchCourses()),
  editCourse: id => dispatch(editCourse(id)),
  fetchCourse: (id) => dispatch(fetchCourse(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseForm);