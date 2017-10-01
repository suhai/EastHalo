import React from 'react';
import { values, merge } from 'lodash';

class BookForm extends React.Component {
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

		this.handleKey = this.handleKey.bind(this);
		this.addBook = this.addBook.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	// componentDidMount() {
	// 	this.props.fetchBooks();
	// };

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = `/admin/${this.props.currentUser.username}/books`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addBook();
		}
	};

	addBook() {
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

		if (data.book.description.trim().length > 0) {
			this.props.createBook(data);
		}

		this.setState({
			category: '',
			title: '',
			author: '',
			publisher: '',
			price: '',
			description: '',
			image_url: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			category,
			title,
			author,
			publisher,
			price,
			description,
			image_url,
		} = this.state;
		
		return (
			<div className='form-div'>
				<form className="form-style-regular">
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
							<input type="submit" value="Add Book" onClick={this.addBook} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default BookForm;