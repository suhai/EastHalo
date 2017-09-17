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
		window.location.hash = 'news/newsform';
	};

	componentDidMount() {
		// this.props.fetchAllNews();
	};

	render() {
		// let newsList = values(this.props.news);
		// let all_news = newsList.map((news, idx) => (
		// 	<SingleNews key={idx} news={news} />
		// ));

		return (
			<div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create News</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Code</th>
							<th scope="col">Title</th>
							<th scope="col">From</th>
							<th scope="col">To</th>
							<th scope="col">Load</th>
							<th scope="col">Size</th>
							<th scope="col">Instructor</th>
						</tr>
					</thead>

					{/* <tbody>
						{all_news}
					</tbody> */}

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default AllNews;
