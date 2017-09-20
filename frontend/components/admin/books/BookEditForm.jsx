import React from 'react';
import { values, merge } from 'lodash';

class BookEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
			title: '',
			author: '',
			publisher: '',
			price: '',
			description: '',
			image_url: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editBook = this.editBook.bind(this);
		this.redirectAction = this.redirectAction.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchBook(id);
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editBook();
		}
	};

	redirectAction() {
		window.location.hash = `admin/${this.props.currentUser.username}/books`;
	};

	editBook() {
		let data = {
			book: {
				category: this.state.category,
				title: this.state.title,
				author: this.state.author,
				publisher: this.state.publisher,
				price: this.state.price,
				description: this.state.description,
				image_url: this.state.image_url
			}
		};
		this.setState({
			category: '',
			title: '',
			author: '',
			publisher: '',
			price: '',
			description: '',
			image_url: ''
		});

		let id = this.props.match.params.id;
		this.props.editBook(data, id);
		this.redirectAction();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.books).length > 0 ?
		this.setState({
			id: props.match.params.id,
			category: props.books[props.match.params.id].category,
			title: props.books[props.match.params.id].title,
			author: props.books[props.match.params.id].author,
			publisher: props.books[props.match.params.id].publisher,
			price: props.books[props.match.params.id].price,
			description: props.books[props.match.params.id].description,
			image_url: props.books[props.match.params.id].image_url
		}) :
		this.setState({
			category: '',
			title: '',
			author: '',
			publisher: '',
			price: '',
			description: '',
			image_url: ''
		});
	};


	render() {
		const {
			category,
			title,
			author,
			publisher,
			price,
			description,
			image_url
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{title}</h2>
					<form className="form-style-9">
						<ul>
							<li>
								<input type="text" className="field-style field-split align-left" value={category} onChange={this.update('category')} placeholder="Category" />
								<input type="text" className="field-style field-split align-right" value={title} onChange={this.update('title')} placeholder="Title" />
							</li>
							<li>
								<input type="text" className="field-style field-split align-left" value={author} onChange={this.update('author')} placeholder="Author" />
								<input type="text" className="field-style field-split align-right" value={publisher} onChange={this.update('publisher')} placeholder="Publisher" />
							</li>
							<li>
								<input type="number" className="field-style field-split align-left" value={price} onChange={this.update('price')} placeholder="Price" />
								<input type="text" className="field-style field-split align-right" value={image_url} onChange={this.update('image_url')} placeholder="Image URL" />
							</li>
							<li>
								<textarea className="field-style" value={description} onChange={this.update('description')} placeholder="Description"></textarea>
							</li>
							<li>
								<input type="submit" value="Save" onClick={this.editBook} />
								<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
							</li>
						</ul>
					</form>
			</div>
		)
	};
};

export default BookEditForm;