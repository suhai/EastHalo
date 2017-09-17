import { connect } from 'react-redux';
import { fetchMeal, fetchMeals, editMeal } from '../../../actions/meal_actions';
import MealEditForm from './MealEditForm';

const mapStateToProps = (state) => ({
	meals: state.meals,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchMeals: () => dispatch(fetchMeals()),
	fetchMeal: (id) => dispatch(fetchMeals(id)),
	editMeal: (data, id) => dispatch(editMeal(data, id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MealEditForm);