import { connect } from 'react-redux';
import { createGrade, fetchGrades } from '../../../actions/grade_actions';
import { fetchUsers } from '../../../actions/user_actions';
import { fetchCourses } from '../../../actions/course_actions';
import { fetchGradeLetters } from '../../../actions/grade_letter_actions';
import GradeForm from './GradeForm';

const mapStateToProps = (state) => ({
	grades: state.grades,
	users: state.users,
	courses: state.courses,
	currentUser: state.session.currentUser,
	grade_letters: state.grade_letters
});

const mapDispatchToProps = dispatch => ({
	createGrade: (data) => dispatch(createGrade(data)),
	fetchGrades: () => dispatch(fetchGrades()),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchCourses: () => dispatch(fetchCourses()),
	fetchGradeLetters: () => dispatch(fetchGradeLetters()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GradeForm);