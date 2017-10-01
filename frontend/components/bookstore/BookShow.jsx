import React from 'react';
import { values, merge } from 'lodash';

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
		// Need to implemenet Order Book / Book already ordered
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
					<div>
					<div>
						
						<div className='grouped-buttons'>
							<button className='btn buy' onClick={this.buyBook}>Buy Book</button>
						</div>
					</div>
					<hr />
				</div>

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
								<td>${price}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		);
	}
}

export default BookShow;