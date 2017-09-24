import React from 'react';
import { values, merge } from 'lodash';

// Need to implemenet Order Book / Book already ordered / favorites
class BookShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			book: {}
		};
		this.buyBook = this.buyBook.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchBook(id);
	};

	buyBook() {
		
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
					<h2 className='course-header'>{title}</h2>
					<div className='grouped-buttons'>
						<button className='btn buy' onClick={this.buyBook}>Buy Book</button>
					</div>
				</div>
				<hr />

				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">Book Information</th>
							<th scope="col">Book Detail</th>
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
						<tr>
							<td>Image</td>
							<td>{image_url}</td>
						</tr>
					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>Book Description</p>
					<p>{description}</p>
				</div>
			</main>
		);
	}
}

export default BookShow;