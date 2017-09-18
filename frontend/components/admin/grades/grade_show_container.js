import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGrade, fetchGrades, editGrade, deleteGrade } from '../../../actions/grade_actions';
import { fetchUser } from '../../../actions/user_actions';
import GradeShow from './GradeShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	grades: state.grades,
});

const mapDispatchToProps = dispatch => ({
	fetchGrade: id => dispatch(fetchGrade(id)),
	fetchGrades: id => dispatch(fetchGrades()),
  editGrade: (grade, id) => dispatch(editGrade(grade, id)),
	deleteGrade: id => dispatch(deleteGrade(id)),
	fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(GradeShow));