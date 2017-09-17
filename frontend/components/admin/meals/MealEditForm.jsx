import React from 'react';
import { values, merge } from 'lodash';

class MealEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: '',
			ingredients: '',
			image_url: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editMeal = this.editMeal.bind(this);
		this.redirectAction = this.redirectAction.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchMeal(id);
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editMeal();
		}
	};

	redirectAction() {
		window.location.hash = `admin/${this.props.currentUser.username}/meals`;
	};

	editMeal() {
		let data = {
			meal: {
				name: this.state.name,
				price: this.state.price,
				ingredients: this.state.ingredients,
				image_url: this.state.image_url
			}
		};
		this.setState({
			name: '',
			price: '',
			ingredients: '',
			image_url: ''
		});

		let id = this.props.match.params.id;
		this.props.editMeal(data, id);
		this.redirectAction();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.meals).length > 0 ?
		this.setState({
			id: props.match.params.id,
			name: props.meals[props.match.params.id].name,
			price: props.meals[props.match.params.id].price,
			ingredients: props.meals[props.match.params.id].ingredients,
			image_url: props.meals[props.match.params.id].image_url
		}) :
		this.setState({
			name: '',
			price: '',
			ingredients: '',
			image_url: ''
		});
	};


	render() {
		const {
			name,
			price,
			ingredients,
			image_url,
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{name}</h2>
				<form className="form-style-9">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={name} onChange={this.update('name')} />
							<input type="number" className="field-style field-split align-right" value={price} onChange={this.update('price')} />
						</li>
						<li>
							<input type="text" className="field-style align-left" value={image_url} onChange={this.update('image_url')} />
						</li>
						<li>
							<textarea className="field-style" value={ingredients} onChange={this.update('ingredients')} ></textarea>
						</li>
						<li>
							<input type="submit" value="Save" onClick={this.editMeal} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default MealEditForm;