import React from 'react';
import { values, merge } from 'lodash';

class MealShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meal: {}
		};
		this.editMeal = this.editMeal.bind(this);
		this.deleteMeal = this.deleteMeal.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchMeal(id);
	};

	editMeal() {
		window.location.hash = `/admin/${this.props.currentUser.username}/meals/edit/${this.state.meal.id}`;
	};

	deleteMeal() {
		this.props.deleteMeal(this.state.meal.id)
		window.location.hash = 'cafetaria/meals';
	};

	componentWillReceiveProps(props) {
		Object.keys(props.meals).length > 0 ?
			this.setState({
				meal: props.meals[props.match.params.id]
			}) :
			this.setState({
				meal: {}
			});
	}

	render() {
		const {
			name, 
			ingredients, 
			price, 
			image_url, 
		} = this.state.meal;

		return (
			<main className='user-page'>
				<div>
					<h2 className='course-header'>{name}</h2>
					<div className='grouped-buttons'>
						<button className='btn edit' onClick={this.editMeal}>Edit Meal</button>
						<button className='btn delete' onClick={this.deleteMeal}>Delete Meal</button>
					</div>
				</div>
				<hr />

				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">Meal Information</th>
							<th scope="col">Meal Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Name</td>
							<td>{name}</td>
						</tr>
						<tr>
							<td>Ingredients</td>
							<td>{ingredients}</td>
						</tr>
						<tr>
							<td>Price</td>
							<td>{price}</td>
						</tr>
						<tr>
							<td>Image</td>
							<td>{image_url}</td>
						</tr>
					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>Book Description</p>
					<p>Some Description Can Go Here</p>
				</div>
			</main>
		);
	}
}

export default MealShow;