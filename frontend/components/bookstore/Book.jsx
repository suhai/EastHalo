import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showBook = this.showBook.bind(this);
  }


  showBook() {
		// const id = this.props.meal.id;
		window.location.hash = `bookstore/${this.props.book.id}`;
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
		} = this.props.book;

    return (
			<tr onClick={this.showMeal}>
				<td>{category}</td>
				<td>{title}</td>
				<td>{author}</td>
				<td>{publisher}</td>
				<td>{price}</td>
				<td>{description}</td>
				<td>{image_url}</td>
			</tr>
    );
  }
}

export default Book;