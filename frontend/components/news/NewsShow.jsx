import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';

class NewsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {}
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

    return (
			<div>
				<iframe className="linker" width="800" height="500" src={url} name="iframe_a"></iframe>
				<p>{headline}</p>
				<p>When the target of a link matches the name of an iframe, the link will open in the iframe.</p>
    	</div>
    );
  }
}

export default NewsDisplay;