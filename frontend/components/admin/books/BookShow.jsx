import React from 'react';
import { values, merge } from 'lodash';

// Need to implemenet Order Book / Payment System / favorites
class BookShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			book: {}
		};
		this.editBook = this.editBook.bind(this);
		this.deleteBook = this.deleteBook.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchBook(id);
	};

	editBook() {
		window.location.hash = `/admin/${this.props.currentUser.username}/books/edit/${this.state.book.id}`;
	};

	deleteBook() {
		this.props.deleteBook(this.state.book.id)
		window.location.hash = `/admin/${this.props.currentUser.username}/books`;
	};

	componentWillReceiveProps(props) {
		Object.keys(props.books).length > 0 ?
			this.setState({
				book: props.books[props.match.params.id]
			}) :
			this.setState({
				book: {}
			});
	}

	render() {
		const {
			category,
			title,
			author,
			publisher,
			price,
			description,
			image_url
		} = this.state.book;

		return (
			<main className='user-page'>
				<div>
				<div className="img-gallery">
						<div className="gallery">
							<img src={image_url} alt={title} />
							<div className="desc">
								<div>
									<p>{title}: ${price}</p>
								</div>
							</div>
						</div>
					</div>
					<hr/>
					<div className='grouped-buttons'>
						<button className='btn edit' onClick={this.editBook}>Edit Book</button>
						<button className='btn delete' onClick={this.deleteBook}>Delete Book</button>
					</div>
				</div>
				<hr />

				<div className='profile-detail-table'>
				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col" className='profile-table-header'>Book Information</th>
							<th scope="col" className='profile-table-header'>Book Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Category</td>
							<td>{category}</td>
						</tr>
						<tr>
							<td>Title</td>
							<td>{title}</td>
						</tr>
						<tr>
							<td>Author</td>
							<td>{author}</td>
						</tr>
						<tr>
							<td>Publisher</td>
							<td>{publisher}</td>
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

export default BookShow;