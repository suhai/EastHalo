import React from 'react';
import { values, merge } from 'lodash';

class CourseShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			course: {},
			classSize: 0,
			courseCap: 1,
			courseDensity: 0,
			profLName: '',
			profFName: '',
			enroll_status: ''
		};
		this.editCourse = this.editCourse.bind(this);
		this.deleteCourse = this.deleteCourse.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
		this.props.fetchCourseEnrollments();
	};

	editCourse() {
		window.location.hash = `/admin/${this.props.currentUser.username}/courses/edit/${this.state.course.id}`;
	};

	deleteCourse() {
		this.props.deleteCourse(this.state.course.id)
		window.location.hash = `/admin/${this.props.currentUser.username}/courses`;
	};

	componentWillReceiveProps(nextProps) {
		if (Object.keys(nextProps.courses).length > 0) {
			let id = nextProps.match.params.id;
			let course = nextProps.courses[id];
			this.setState({
				course: course,
				start_time: course.start_time.slice(11,16),
				end_time: course.end_time.slice(11,16),
				departmentName: course.department.name,
				classSize: course.students.length,
				courseCap: course.course_cap,
				courseDensity: (course.students.length + ' / ' + course.course_cap),
				profLName: course.professor.lname.slice(0, 1).toUpperCase() + course.professor.lname.slice(1),
				profFName: course.professor.fname.slice(0, 1).toUpperCase() + course.professor.fname.slice(1)
			});
		} else {
			this.setState({
				course: {},
				departmentName: '',
				classSize: 0,
				courseCap: 1,
				courseDensity: 0,
				profLName: '',
				profFName: ''
			});
		};
	}

	render() {
		const {
			id,
			course_code,
			title,
			course_credit,
			course_cap,
			department,
			course_description,
			professor,
			students
		} = this.state.course;

		const {
			start_time,
			end_time,
			departmentName,
			courseDensity,
			profLName,
			profFName
		} = this.state;

		return (
			<main className='user-page'>
				<div>
					<div className='grouped-buttons'>
						<button className='btn edit' onClick={this.editCourse}>Edit Course</button>
						<button className='btn delete' onClick={this.deleteCourse}>Delete Course</button>
					</div>
				</div>
				<hr />
				
				
				<div className='profile-detail-table'>
					<table id="background-image" className="full-width">
						<thead>
							<tr className='fixed-header'>
								<th scope="col" className='profile-table-header'>Course Information</th>
								<th scope="col" className='profile-table-header'>Course Detail</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>Course Code</td>
								<td>{course_code}</td>
							</tr>
							<tr>
								<td>Department</td>
								<td>{departmentName}</td>
							</tr>
							<tr>
								<td>Title</td>
								<td>{title}</td>
							</tr>
							<tr>
								<td>Start Time</td>
								<td>{start_time}</td>
							</tr>
							<tr>
								<td>End Time</td>
								<td>{end_time}</td>
							</tr>
							<tr>
								<td>Course Load</td>
								<td>{course_credit}</td>
							</tr>
							<tr>
								<td>Current Density</td>
								<td>{courseDensity}</td>
							</tr>
							<tr>
								<td>Instructor</td>
								<td>{`${profLName}, ${profFName}`}</td>
							</tr>
						</tbody>
					</table>
					</div>
			</main>
		);
	}
}

export default CourseShow;
