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
			<MyClass key={idx} course={course} fetchCourse={this.props.fetchCourse}/>
		));

		return (
			<div className='pages'>
				<h1 className='table-h1'>My Schedule</h1>
        <div className="tbl-header2">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">Code</th>
							<th scope="col">Course</th>
							<th scope="col">Starts</th>
							<th scope="col">Ends At</th>
							<th scope="col">Load</th>
							<th scope="col">Class Size</th>
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
