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
      <div className=''>

			<h1 className='table-h1'>Users Table</h1>
			<div className="tbl-header">
				<table cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th scope="col">Category</th>
							<th scope="col">Title</th>
							<th scope="col">Author</th>
							<th scope="col">Publisher</th>
							<th scope="col">Price</th>
							<th scope="col">Description</th>
							<th scope="col">Image</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{books}
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

export default Bookstore;