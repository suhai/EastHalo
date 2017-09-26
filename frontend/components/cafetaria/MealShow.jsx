import React from 'react';
import { values, merge } from 'lodash';

// Need to implemenet Order Meal / Meal already ordered / favorites
class MealShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meal: {}
		};
		this.editMeal = this.buyMeal.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchMeal(id);
	};

	buyMeal() {
		
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
				<div className="img-gallery">
					<div className="gallery">
						<img src={image_url} alt={name} />
					</div>
				</div>
				<hr />
				<div>
					<div>
						<div className='grouped-buttons'>
							<button className='btn buy' onClick={this.buyMeal}>Buy Meal</button>
						</div>
					</div>
					<hr />
				</div>
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
								<td>${price}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		);
	}
}

export default MealShow;