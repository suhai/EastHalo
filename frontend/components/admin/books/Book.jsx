// import React from 'react';
// import ReactDOM from 'react-dom';

// class Book extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//     this.showBook = this.showBook.bind(this);
//   }


//   showBook() {
// 		window.location.hash = `bookstore/books/${this.props.book.id}`;
// 	};


//   render() {
// 		const { 
// 			category, 
// 			title, 
// 			author, 
// 			publisher, 
// 			price, 
// 			description,
// 			image_url
// 		} = this.props.book;

//     return (
// 			<tr onClick={this.showBook}>
// 				<td>{category}</td>
// 				<td>{title}</td>
// 				<td>{author}</td>
// 				<td>{publisher}</td>
// 				<td>{price}</td>
// 				<td>{description}</td>
// 				<td>{image_url}</td>
// 			</tr>
//     );
//   }
// }

// export default Book;