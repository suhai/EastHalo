import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMeals, deleteMeal, createMeal } from '../../../actions/meal_actions';
import Meals from './Meals';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
	creatMeal: (data) => dispatch(createMeal(data)),
	fetchMeals: () => dispatch(fetchMeals()),
  deleteMeal: id => dispatch(deleteMeal(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Meals));