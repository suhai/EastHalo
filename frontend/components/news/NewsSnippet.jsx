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
			date,
			image_url
		} = this.props.news;

    return (
			<div className="img-gallery" onClick={this.showNews}>
				<div className="gallery">
					<img src={image_url} alt='Mews Article' />
					<div className="desc">
					<div>
						<p>{headline.slice(0,20)}</p>
					</div>
					</div>
				</div>
				<hr/>
			</div>
    );
  }
}

export default NewsSnippet;