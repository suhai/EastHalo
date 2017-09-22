import React from 'react';
import ReactDOM from 'react-dom';

class NewsSnippet extends React.Component {
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
			<div>
				<div onClick={this.showNews}>
					<p>{id}</p>
					<p>{headline.slice(0,20)}</p>
					<p>{url}</p>
					<p>{date}</p>
				</div>
	
				<div>NEWS SNIPPET GOES HERE</div>
				<hr/>
			</div>
    );
  }
}

export default NewsSnippet;