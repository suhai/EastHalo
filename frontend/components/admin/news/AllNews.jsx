import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import SingleNews from './SingleNews';

class AllNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/news/newsform`;
	};

	componentDidMount() {
		this.props.fetchAllNews();
	};

	render() {
		let newsList = values(this.props.news);
		let all_news = newsList.map((news, idx) => (
			<SingleNews key={idx} news={news} currentUser={this.props.currentUser} editNews={this.props.editNews} deleteNews={this.props.deleteNews}/>
		));

		return (
			<div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create News</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">News ID</th>
							<th scope="col">Headline</th>
							<th scope="col">News Link</th>
							<th scope="col">Date</th>
							<th scope="col">Action I</th>
							<th scope="col">action II</th>
						</tr>
					</thead>

					<tbody>
						{all_news}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default AllNews;
