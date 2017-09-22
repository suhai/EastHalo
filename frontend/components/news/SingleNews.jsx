import React from 'react';
import ReactDOM from 'react-dom';

class SingleNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showNews = this.showNews.bind(this);
  }


  showNews() {
		window.location.hash = `/news/${this.props.news.id}`
	};


  render() {
		const { 
			id, 
			headline, 
			url, 
			date
		} = this.props.news;

    return (
			<tr onClick={this.showNews}>
				<td>{id}</td>
				<td>{headline.slice(0,20)}</td>
				<td>{url}</td>
				<td>{date}</td>
			</tr>
    );
  }
}

export default SingleNews;