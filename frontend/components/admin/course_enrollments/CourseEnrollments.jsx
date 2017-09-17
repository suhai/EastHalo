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
      <div className=''>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Enrollment ID</th>
							<th scope="col">Course</th>
							<th scope="col">Student</th>
							<th scope="col">Professor</th>
							<th scope="col">Load</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>

					<tbody>
						{enrollments}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default CourseEnrollments;