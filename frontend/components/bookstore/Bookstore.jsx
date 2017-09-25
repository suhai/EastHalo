import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Book from './Book';

class Bookstore extends React.Component {
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
		let books = bookList.map((book, idx) => (
			<Book key={idx} book={book} />
		));

		return (
			<div className='community-page'>
				{books}
			</div>
		);
  }
}

export default Bookstore;