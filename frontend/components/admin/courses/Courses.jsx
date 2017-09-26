import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Course from './Course';

class Courses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/courses/courseform`;
	};

	componentDidMount() {
		this.props.fetchCourses();
	};

	render() {
		let courseList = values(this.props.courses);
		let courses = courseList.map((course, idx) => (
			<Course key={idx} course={course} currentUser={this.props.currentUser} />
		));

		return (
			<div className='pages'>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Course</button></div>

				<h1 className='table-h1'>Courses Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
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

export default Courses;