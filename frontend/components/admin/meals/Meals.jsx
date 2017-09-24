import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Meal from './Meal';

class Meals extends React.Component {
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
			<Meal key={idx} meal={meal} currentUser={this.props.currentUser} />
		));

    return (
      <div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Meal</button></div>

				<h1 className='table-h1'>Users Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col">Ingredients</th>
							<th scope="col">Image</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{meals}
						</tbody>
					</table>
				</div>

				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default Meals;