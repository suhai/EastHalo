import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Meal from './Meal';

class Cafeteria extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};
	
	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/meals/mealform`;
	};

	componentDidMount() {
		this.props.fetchMeals();
	};

  render() {
		let mealList = values(this.props.meals);
		let meals = mealList.map((meal, idx) => (
			<Meal key={idx} meal={meal} />
		));


		return (
			<div className='community-page'>
				{meals}
			</div>
		);
  }
}

export default Cafeteria;