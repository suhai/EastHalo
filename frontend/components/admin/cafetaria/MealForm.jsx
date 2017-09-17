// import React from 'react';
// import { values, merge } from 'lodash';

// class MealForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: '',
// 			price: '',
// 			ingredients: '',
// 			image_url: ''
// 		};

// 		this.update = this.update.bind(this);
// 		this.handleKey = this.handleKey.bind(this);
// 		this.addMeal = this.addMeal.bind(this);
// 		this.redirectAction = this.redirectAction.bind(this);
// 	};

// 	componentDidMount() {
// 		this.props.fetchUsers();
// 		this.props.fetchMeals();
// 	};

// 	update(prop) {
// 		return e => this.setState({ [prop]: e.currentTarget.value });	
// 	};

// 	redirectAction() {
// 		window.location.hash = '/cafetaria';
// 	};

// 	handleKey(e) {
// 		if (e.keyCode === 13) {
// 			this.addMeal();
// 		}
// 	};

// 	addMeal() {
// 		let data = {
// 			meal: {
// 				name: this.state.name,
// 				price: this.state.price,
// 				ingredients: this.state.ingredients,
// 				image_url: this.state.image_url
// 			}
// 		};

// 		if (data.meal.ingredients.trim().length > 0) {
// 			this.props.createMeal(data);
// 		}

// 		this.setState({
// 			name: '',
// 			price: '',
// 			ingredients: '',
// 			image_url: ''
// 		});

// 		this.redirectAction();
// 	};

// 	render() {
// 		const {
// 			name,
// 			price,
// 			ingredients,
// 			image_url,
// 		} = this.state;

// 		return (
// 			<div>
// 				<form className="form-style-9">
// 					<ul>
// 						<li>
// 							<input type="text" className="field-style field-split align-left" value={name} onChange={this.update('name')} placeholder="Meal Name" />
// 							<input type="number" className="field-style field-split align-right" value={price} onChange={this.update('price')} placeholder="Price" />
// 						</li>
// 						<li>
// 							<input type="text" className="field-style align-left" value={image_url} onChange={this.update('image_url')} placeholder="Image URL" />
// 						</li>
// 						<li>
// 							<textarea className="field-style" value={ingredients} onChange={this.update('ingredients')} placeholder="Ingredients"></textarea>
// 						</li>
// 						<li>
// 							<input type="submit" value="Add Meal" onClick={this.addMeal} />
// 							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
// 						</li>
// 					</ul>
// 				</form>
// 			</div>
// 		)
// 	};
// };

// export default MealForm;