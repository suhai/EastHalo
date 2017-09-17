import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createGradeLetter, fetchGradeLetters, deleteGradeLetter, editGradeLetter } from '../../../actions/grade_letter_actions';
import GradeLetters from './GradeLetters';

const mapStateToProps = (state, ownProps) => ({
	grade_letters: state.grade_letters,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createGradeLetter: data => dispatch(createGradeLetter(data)),
	fetchGradeLetters: () => dispatch(fetchGradeLetters()),
	editGradeLetter: id => dispatch(editGradeLetter(id)),
  deleteGradeLetter: id => dispatch(deleteGradeLetter(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(GradeLetters));