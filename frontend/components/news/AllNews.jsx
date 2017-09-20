import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import SingleNews from './SingleNews';

class AllNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchAllNews();
	};

	render() {
		let newsList = values(this.props.news);
		let all_news = newsList.map((news, idx) => (
			<SingleNews key={idx} news={news} />
		));

		return (
			<div className=''>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">News ID</th>
							<th scope="col">Headline</th>
							<th scope="col">News Link</th>
							<th scope="col">Date</th>
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
