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
		this.buyMeal = this.buyMeal.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchMeal(id);
	};

	buyMeal() {
		
	};

	editMeal() {
		window.location.hash = `/admin/${this.props.currentUser.username}/meals/edit/${this.state.meal.id}`;
	};

	deleteMeal() {
		this.props.deleteMeal(this.state.meal.id);
		window.location.hash = `/admin/${this.props.currentUser.username}/meals`;
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
				<div className="img-gallery">
					<div className="gallery">
						<img src={image_url} alt={name} />
						<div className="desc">
							<div>
								<p>{name}: ${price}</p>
							</div>
						</div>
					</div>
				</div>
				<hr />
					<div className='grouped-buttons'>
						<button className='btn buy' onClick={this.buyMeal}>Buy Meal</button>
						<button className='btn delete' onClick={this.deleteMeal}>Delete Meal</button>
						<button className='btn edit' onClick={this.editMeal}>Edit Meal</button>
					</div>
				</div>
				<hr />

				<div className='profile-detail-table'>
					<table id="background-image" className="full-width">
						<thead>
							<tr className='fixed-header'>
								<th scope="col" className='profile-table-header'>Meal Information</th>
								<th scope="col" className='profile-table-header'>Meal Detail</th>
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
						</tbody>
					</table>
				</div>
			</main>
		);
	}
}

export default MealShow;