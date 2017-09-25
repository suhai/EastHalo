import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showBook = this.showBook.bind(this);
  };

  showBook() {
		window.location.hash = `bookstore/books/${this.props.book.id}`;
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
			<div className="img-gallery" onClick={this.showUser}>
				<div className="gallery">
					<img src={image_url} alt="Diver" width={300} height={200} />
					<div className="desc">
					<div>
						<p>{title}</p>
					</div>
					</div>
				</div>
				<hr/>
			</div>
    );
  }
}

export default Book;