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
			profFInitial: ''
		};
		this.editCourse = this.editCourse.bind(this);
		this.deleteCourse = this.deleteCourse.bind(this);
	}

	componentWillMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
	};

	editCourse() {
		window.location.hash = `courses/edit/${this.state.course.id}`;
	};

	deleteCourse() {
		this.props.deleteCourse(this.state.course.id)
		window.location.hash = '/registrar';
	};

	componentWillReceiveProps(props) {
		Object.keys(props.courses).length > 0 ?
			this.setState({
				course: props.courses[props.match.params.id],
				start_time: props.courses[props.match.params.id].start_time.slice(11,16),
				end_time: props.courses[props.match.params.id].end_time.slice(11,16),
				departmentName: props.courses[props.match.params.id].department.name,
				classSize: props.courses[props.match.params.id].students.length,
				courseCap: props.courses[props.match.params.id].course_cap,
				courseDensity: (props.courses[props.match.params.id].students.length / props.courses[props.match.params.id].course_cap),
				profLName: props.courses[props.match.params.id].professor.lname,
				profFInitial: props.courses[props.match.params.id].professor.fname.slice(0, 1)
			}) :
			this.setState({
				course: {},
				departmentName: '',
				classSize: 0,
				courseCap: 1,
				courseDensity: 0,
				profLName: '',
				profFInitial: ''
			});
	}

	render() {
		const {
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
			profFInitial
		} = this.state;

		return (
			<main className='user-page'>
				<div>
					<h2 className='course-header'>{title}</h2>
					<div><button className='btn edit' onClick={this.editCourse}>Edit Course</button></div>
					<div><button className='btn delete' onClick={this.deleteCourse}>Delete Course</button></div>
				</div>
				<hr />

				<table id="background-image" summary="Meeting Results">
					<thead>
						<tr>
							<th scope="col">Course Information</th>
							<th scope="col">Course Detail</th>
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
							<td>Description</td>
							<td>{course_description}</td>
						</tr>
						<tr>
							<td>Current Density</td>
							<td>{courseDensity}</td>
						</tr>
						<tr>
							<td>Instructor</td>
							<td>{`${profLName}, ${profFInitial.toUpperCase()}`}</td>
						</tr>
					</tbody>
				</table>
				<div>
					<p className='table-paragraph'>Course Description</p>
					<p>{course_description}</p>
				</div>
			</main>
		);
	}
}

export default CourseShow;