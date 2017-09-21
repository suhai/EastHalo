import React from 'react';
import { values, merge } from 'lodash';

class NewsEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headline: '',
			url: '',
			date: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editNews = this.editNews.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchNews(id);
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editNews();
		}
	};

	redirectPath() {
		window.location.hash = `/admin/${this.props.currentUser.username}/news`
	};

	editNews() {
		let data = {
			news: {
				headline: this.state.headline,
				url: this.state.url,
				date: this.state.date
			}
		};

		if (data.news.url.trim().length > 0) {
			let id = this.props.match.params.id;
			this.props.editNews(data, id);
		}

		this.setState({
			headline: '',
			url: '',
			date: '',
		});

		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.news).length > 0 ?
		this.setState({
			id: props.match.params.id,
			headline: props.news[props.match.params.id].headline,
			url: props.news[props.match.params.id].url,
			date: props.news[props.match.params.id].date
		}) :
		this.setState({
			headline: '',
			url: '',
			date: ''
		});
	};


	render() {
		const {
			headline,
			url,
			date
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{headline}</h2>
				<form className="form-style-9">
					<ul>
						<li>
							<input type="text" className="field-style" value={headline} onChange={this.update('headline')} placeholder="News Headline" />
						</li>
						<li>
							<input type="text" className="field-style" value={url} onChange={this.update('url')} placeholder="News URL" />
						</li>
						<li>
							<input type="date" className="field-style" value={date} onChange={this.update('date')} placeholder="News URL" />
						</li>
						<li>
							<input type="submit" value="Update News" onClick={this.editNews} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default NewsEditForm;