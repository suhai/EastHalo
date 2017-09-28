import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';

class NewsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {
				headline: '',
				url: ''
			}
    };
    this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchNews(id);
		this.props.fetchAllNews();
	};
	
	redirectPath() {
		window.location.hash = '/news';
	};

	componentWillReceiveProps(props) {
		Object.keys(props.all_news).length > 0 ?
			this.setState({
				news: props.all_news[props.match.params.id]
			}) :
			this.setState({
				news: {
					headline: '',
					url: ''
				}
			});
	}


  render() {
		const {
			headline,
			url
		} = this.state.news

    return (
			<div className='news-show-div'>
				<iframe className="linker" width="800" height="500" src={url} name="iframe_a"></iframe>
    	</div>
    );
  }
}

export default NewsShow;