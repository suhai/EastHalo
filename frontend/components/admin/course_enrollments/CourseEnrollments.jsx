import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import CourseEnrollment from './CourseEnrollment';

class CourseEnrollments extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchCourseEnrollments();
	};

  render() {
		let enrollmentList = values(this.props.course_enrollments);
		let enrollments = enrollmentList.map((enrollment, idx) => (
			<CourseEnrollment key={idx} enrollment={enrollment} deleteCourseEnrollment={this.props.deleteCourseEnrollment} currentUser={this.props.currentUser}/>
		));

    return (
      <div className='pages'>

			<h1 className='table-h1'>Enrollments Table</h1>
			<div className="tbl-header">
				<table cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th scope="col">Enrollmt ID</th>
							<th scope="col">Course</th>
							<th scope="col">Student</th>
							<th scope="col">Professor</th>
							<th scope="col">Load</th>
							<th scope="col">Delete</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{enrollments}
						</tbody>
					</table>
				</div>
			</div>
    );
  }
}

export default CourseEnrollments;