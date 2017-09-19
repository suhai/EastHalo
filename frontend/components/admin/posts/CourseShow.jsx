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
		this.addCourse = this.addCourse.bind(this);
		this.dropCourse = this.dropCourse.bind(this);
		this.toggleCourse = this.toggleCourse.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
		this.props.fetchCourseEnrollments();
	};

	editCourse() {
		window.location.hash = `/admin/${this.props.currentUser.username}/courses/edit/${this.state.course.id}`;
	};

	addCourse() {
		const { id: course_id } = this.state.course;
		const { id: student_id } = this.props.currentUser;
		let data = {
			course_enrollment: {
				course_id,
				student_id
			}
		};

		if (course_id !== undefined && student_id !== undefined) {
			this.props.createCourseEnrollment(data);
			this.setState({
				enroll_status: 'Drop Course'
			})	
		}
	};

	dropCourse() {
		this.props.currentUser.course_enrollments.forEach(enrollment => {
			if (enrollment.course_id === this.state.course.id) {
				this.props.deleteCourseEnrollment(enrollment.id);
				this.setState({
					enroll_status: 'Add Course'
				})
			}
		})
	};

	toggleCourse() {
		this.state.enroll_status === 'Add Course' ?
		this.addCourse() : this.dropCourse()
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
				profLName: props.courses[props.match.params.id].professor.lname.slice(0, 1).toUpperCase() + props.courses[props.match.params.id].professor.lname.slice(1),
				profFName: props.courses[props.match.params.id].professor.fname.slice(0, 1).toUpperCase() + props.courses[props.match.params.id].professor.fname.slice(1)
			}) :
			this.setState({
				course: {},
				departmentName: '',
				classSize: 0,
				courseCap: 1,
				courseDensity: 0,
				profLName: '',
				profFName: ''
			});

		this.props.currentUser.course_enrollments.some(enrollment => (enrollment.course_id) === this.state.course.id ) ? 
		this.setState({
			enroll_status: 'Drop Course'
		}) :
		this.setState({
			enroll_status: 'Add Course'
		})
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
					<h2 className='course-header'>{title}</h2>
					<div className='grouped-buttons'>
						<button className='btn edit' onClick={this.editCourse}>Edit Course</button>
						<button className='btn delete' onClick={this.deleteCourse}>Delete Course</button>
						<button className='btn delete' onClick={this.toggleCourse}>{this.state.enroll_status}</button>	
					</div>
				</div>
				<hr />
				
				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
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
							<td>Current Density</td>
							<td>{courseDensity}</td>
						</tr>
						<tr>
							<td>Instructor</td>
							<td>{`${profLName}, ${profFName}`}</td>
						</tr>
					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>Course Description</p>
					<p>{course_description}</p>
				</div>
			</main>
		);
	}
}

export default CourseShow;


// { course_enrollments.some(course => course.course_id === id ) ? 
// 	<button className='btn delete' onClick={this.dropCourse}>Drop Course</button> :
// 	<button className='btn create' onClick={this.addCourse}>Add Course</button> 		
//  }