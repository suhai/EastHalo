import { connect } from 'react-redux';
import { createMeal, fetchMeals } from '../../../actions/meal_actions';
import { fetchUsers } from '../../../actions/user_actions';
import MealForm from './MealForm';

const mapStateToProps = (state) => ({
	meals: state.meals,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createMeal: (data) => dispatch(createMeal(data)),
	fetchMeals: () => dispatch(fetchMeals()),
	fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MealForm);