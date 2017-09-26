import React from 'react';
import { values, merge } from 'lodash';

class NewsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headline: '',
			url: '',
			image_url: '',
			date: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addNews = this.addNews.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		this.props.fetchAllNews();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = `/admin/${this.props.currentUser.username}/news`
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addNews();
		}
	};

	addNews() {
		let data = {
			news: {
				headline: this.state.headline,
				url: this.state.url,
				image_url: this.state.image_url,
				date: this.state.date
			}
		};

		if (data.news.url.trim().length > 0) {
			this.props.createNews(data);
		}

		this.setState({
			headline: '',
			url: '',
			image_url: '',
			date: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			headline,
			url,
			image_url,
			date
		} = this.state;

		return (
			<div>
				<form className="form-style-9">
					<ul>
						<li>
							<input type="text" className="field-style" value={headline} onChange={this.update('headline')} placeholder="News Headline" />
						</li>
						<li>
							<input type="text" className="field-style" value={url} onChange={this.update('url')} placeholder="News URL" />
						</li>
						<li>
							<input type="text" className="field-style" value={image_url} onChange={this.update('image_url')} placeholder="Image URL" />
						</li>
						<li>
							<input type="date" className="field-style" value={date} onChange={this.update('date')} placeholder="News URL" />
						</li>
						<li>
							<input type="submit" value="Save News" onClick={this.addNews} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default NewsForm;