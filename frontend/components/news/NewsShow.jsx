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
				news: {}
			});
	}


  render() {
		const {
			headline,
			url
		} = this.state.news

		let root_url = 'https:';
		let tail_url = url.split(':')[1];
		let new_url = root_url + tail_url

    return (
			<div>
				<iframe className="linker" width="800" height="500" src={new_url} name="iframe_a"></iframe>
				<p>{headline}</p>
				<p>When the target of a link matches the name of an iframe, the link will open in the iframe.</p>
    	</div>
    );
  }
}

export default NewsShow;