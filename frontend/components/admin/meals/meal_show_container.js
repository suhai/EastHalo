import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMeal, editMeal, deleteMeal } from '../../../actions/meal_actions';
import MealShow from './MealShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  fetchMeal: id => dispatch(fetchMeal(id)),
  editMeal: (book, id) => dispatch(editMeal(book, id)),
	deleteMeal: id => dispatch(deleteMeal(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(MealShow));