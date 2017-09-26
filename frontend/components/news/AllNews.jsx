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
			<div className='pages'>

			<h1 className='table-h1'>News Page</h1>
			<div className="tbl-header">
				<table cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th scope="col">News ID</th>
							<th scope="col">Headline</th>
							<th scope="col">Date</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{all_news}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default AllNews;