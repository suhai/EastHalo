import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import MyClass from './MyClass';

class MyClasses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchCourses();
	};

	render() {
		let courseList = values(this.props.courses);
		let courses = courseList.map((course, idx) => (
			<MyClass key={idx} course={course} />
		));

		return (
			<div className=''>
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

					<tbody>
						{courses}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default MyClasses;
