import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Book from './Book';

class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/books/bookform`;
	};

	componentDidMount() {
		this.props.fetchBooks();
	};

	render() {
		let bookList = values(this.props.books);
		let books = bookList.map((map, idx) => (
			<Book key={idx} book={book} />
		));

		return (
			<div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Book</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Category</th>
							<th scope="col">Title</th>
							<th scope="col">Author</th>
							<th scope="col">Publisher</th>
							<th scope="col">Price</th>
							<th scope="col">Description</th>
							<th scope="col">Image URL</th>
						</tr>
					</thead>

					<tbody>
						{books}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Books;
