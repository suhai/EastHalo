import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Meal from './Meal';

class Cafetaria extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};
	
	renderForm() {
		window.location.hash = 'cafetaria/mealform';
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
      <div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Meal</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col">Ingredients</th>
							<th scope="col">Image</th>
						</tr>
					</thead>

					<tbody>
						{meals}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default Cafetaria;