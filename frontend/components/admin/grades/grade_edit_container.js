import { connect } from 'react-redux';
import { fetchGrade, fetchGrades, editGrade } from '../../../actions/grade_actions';
import { fetchUsers } from '../../../actions/user_actions';
import { fetchCourses } from '../../../actions/course_actions';
import { fetchGradeLetters } from '../../../actions/grade_letter_actions';
import GradeEditForm from './GradeEditForm';

const mapStateToProps = (state) => ({
	grades: state.grades,
	users: state.users,
	courses: state.courses,
	currentUser: state.session.currentUser,
	grade_letters: state.grade_letters
});

const mapDispatchToProps = dispatch => ({
	fetchGrades: () => dispatch(fetchGrades()),
	fetchGrade: (id) => dispatch(fetchGrade(id)),
	editGrade: (data, id) => dispatch(editGrade(data, id)),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchCourses: () => dispatch(fetchCourses()),
	fetchGradeLetters: () => dispatch(fetchGradeLetters()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GradeEditForm);