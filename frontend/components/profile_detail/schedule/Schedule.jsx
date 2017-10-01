import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import MyClass from './MyClass';

class Schedule extends React.Component {
	constructor(props) {
		super(props);
		
	};

	componentDidMount() {
		this.props.fetchCourses();
	};

	render() {
		let courses = values(this.props.currentUser.courses).map((course, idx) => (
			<MyClass key={idx} course={course} />
		));

		return (
			<div className='pages'>
				<h1 className='table-h1'>My Schedule</h1>
        <div className="tbl-header2">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">Code</th>
							<th scope="col">Course Title</th>
							<th scope="col">From</th>
							<th scope="col">To</th>
							<th scope="col">Load</th>
							<th scope="col">Size</th>
							<th scope="col">Instructor</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{courses}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Schedule;
