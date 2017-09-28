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
		this.addCourse = this.addCourse.bind(this);
		this.dropCourse = this.dropCourse.bind(this);
		this.toggleCourse = this.toggleCourse.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
		this.props.fetchCourses();
		this.props.fetchCourseEnrollments();
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
		}
	};

	dropCourse() {
		let targetEnrollment = values(this.props.course_enrollments).find(enrollment => {
			return (enrollment.course_id == this.props.match.params.id) 
		});

		if (targetEnrollment !== undefined) {
			this.props.deleteCourseEnrollment(targetEnrollment.id);
		} 
	};

	toggleCourse() {
		this.props.course_enrollments[this.props.match.params.id] ?
		this.dropCourse() : this.addCourse()
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

		values(this.props.course_enrollments).some(enrollment => (enrollment.course_id) == this.state.course.id ) ? 
		this.setState({
			enroll_status: 'Drop Course',
			color: 'delete'
		}) :
		this.setState({
			enroll_status: 'Add Course',
			color: 'add'
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
			profFName,
			color,
			enroll_status
		} = this.state;

		let enrollableUser = this.props.currentUser.type == 'Student' ?
				<div className='grouped-buttons'>
					<button className={`btn ${color}`} onClick={this.toggleCourse}>{enroll_status}</button>	
				</div> :
				<div>{`Hi ${this.props.currentUser.username}! Interested in ${course_code}? You need to be a student in order to sign up for it.`}</div>

		return (
			<main className='user-page'>
				<div>
					{enrollableUser}
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