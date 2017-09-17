import { connect } from 'react-redux';
import { fetchGradeLetter, fetchGradeLetters, editGradeLetter } from '../../../actions/grade_letter_actions';
import GradeLetterEditForm from './GradeLetterEditForm';

const mapStateToProps = (state) => ({
	grade_letters: state.grade_letters,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchGradeLetters: () => dispatch(fetchGradeLetters()),
	fetchGradeLetter: (id) => dispatch(fetchGradeLetter(id)),
	editGradeLetter: (data, id) => dispatch(editGradeLetter(data, id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GradeLetterEditForm);