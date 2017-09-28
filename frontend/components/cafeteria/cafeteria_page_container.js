import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createMeal, fetchMeals, deleteMeal, editMeal } from '../../actions/meal_actions';
import Cafeteria from './Cafeteria';

const mapStateToProps = (state, ownProps) => ({
	meals: state.meals,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createMeal: data => dispatch(createMeal(data)),
	fetchMeals: () => dispatch(fetchMeals()),
	editMeal: id => dispatch(editMeal(id)),
  deleteMeal: id => dispatch(deleteMeal(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Cafeteria));