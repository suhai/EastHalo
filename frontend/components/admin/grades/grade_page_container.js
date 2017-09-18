import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createGrade, fetchGrades, deleteGrade, editGrade } from '../../../actions/grade_actions';
import Grades from './Grades';

const mapStateToProps = (state, ownProps) => ({
	grades: state.grades,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createGradee: data => dispatch(createGrade(data)),
	fetchGrades: () => dispatch(fetchGrades()),
	editGrade: id => dispatch(editGrade(id)),
  deleteGrade: id => dispatch(deleteGrade(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Grades));