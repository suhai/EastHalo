// import React from 'react';
// import { values, merge } from 'lodash';

// class CourseShow extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			course: {},
// 			classSize: 0,
// 			courseCap: 1,
// 			courseDensity: 0,
// 			profLName: '',
// 			profFName: ''
// 		};
// 		this.editCourse = this.editCourse.bind(this);
// 		this.deleteCourse = this.deleteCourse.bind(this);
// 		this.enrollInCourse = this.enrollInCourse.bind(this);
// 		this.disEnrollFromCourse = this.disEnrollFromCourse.bind(this);
// 	}

// 	componentDidMount() {
// 		const id = this.props.match.params.id;
// 		this.props.fetchCourse(id);
// 		this.props.fetchCourseEnrollments();
// 	};

// 	editCourse() {
// 		window.location.hash = `courses/edit/${this.state.course.id}`;
// 	};

// 	enrollInCourse() {
// 		let data = {
// 			course_enrollment: {
// 				course_id: this.state.course.id,
// 				student_id: this.props.currentUser.id
// 			}
// 		};

// 		if (data.course_id !== "undefined" && data.student_id !== "undefined") {
// 			this.props.createCourseEnrollment(data);
// 		}
// 	};

// 	disEnrollFromCourse() {
// 		console.log('disenrolling now .....');
// 		console.log(values(this.props.courseEnrollments));
// 		// let enrollmentsArr = values(this.props.courseEnrollments);
// 		// console.log(this.props.courseEnrollments);
// 		// console.log(this.state.course.id);
// 		const olele = this.props.courseEnrollments
// 		let myPromise = new Promise((resolve, reject) => {
// 			resolve(
// 				olele.find((el) => {
// 					var obj = Object.values(el)[0];
// 					return (obj.student_id === this.props.currentUser.id && obj.course_id === this.state.course.id) 	
// 				})
// 			)	
// 		});

// 		myPromise.then((res) => {
// 			console.log(res);
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		});
// 		// let enrollmentID = values(this.props.courseEnrollments).filter(function(enrollment) { return (enrollment.student_id === this.props.currentUser.id && enrollment.course_id === this.state.course.id)})
// 		// .id;
		
// 		// this.props.deleteCourseEnrollment(enrollmentID);
		
// 	};

// 	deleteCourse() {
// 		this.props.deleteCourse(this.state.course.id)
// 		window.location.hash = '/registrar';
// 	};

// 	componentWillReceiveProps(props) {
// 		Object.keys(props.courses).length > 0 ?
// 			this.setState({
// 				course: props.courses[props.match.params.id],
// 				start_time: props.courses[props.match.params.id].start_time.slice(11,16),
// 				end_time: props.courses[props.match.params.id].end_time.slice(11,16),
// 				departmentName: props.courses[props.match.params.id].department.name,
// 				classSize: props.courses[props.match.params.id].students.length,
// 				courseCap: props.courses[props.match.params.id].course_cap,
// 				courseDensity: (props.courses[props.match.params.id].students.length / props.courses[props.match.params.id].course_cap),
// 				profLName: props.courses[props.match.params.id].professor.lname.slice(0, 1).toUpperCase() + props.courses[props.match.params.id].professor.lname.slice(1),
// 				profFName: props.courses[props.match.params.id].professor.fname.slice(0, 1).toUpperCase() + props.courses[props.match.params.id].professor.fname.slice(1)
// 			}) :
// 			this.setState({
// 				course: {},
// 				departmentName: '',
// 				classSize: 0,
// 				courseCap: 1,
// 				courseDensity: 0,
// 				profLName: '',
// 				profFName: ''
// 			});
// 	}

// 	render() {
// 		const {
// 			course_code,
// 			title,
// 			course_credit,
// 			course_cap,
// 			department,
// 			course_description,
// 			professor,
// 			students
// 		} = this.state.course;

// 		const {
// 			start_time,
// 			end_time,
// 			departmentName,
// 			courseDensity,
// 			profLName,
// 			profFName
// 		} = this.state;

// 		return (
// 			<main className='user-page'>
// 				<div>
// 					<h2 className='course-header'>{title}</h2>
// 					<div className='grouped-buttons'>
// 						<button className='btn edit' onClick={this.editCourse}>Edit Course</button>
// 						<button className='btn delete' onClick={this.deleteCourse}>Delete Course</button>
// 						<button className='btn create' onClick={this.enrollInCourse}>Add Course</button>
// 						<button className='btn delete' onClick={this.disEnrollFromCourse}>Drop Course</button>
// 					</div>
// 				</div>
// 				<hr />

// 				<table id="background-image" className="full-width">
// 					<thead>
// 						<tr className='fixed-header'>
// 							<th scope="col">Course Information</th>
// 							<th scope="col">Course Detail</th>
// 						</tr>
// 					</thead>

// 					<tbody>
// 						<tr>
// 							<td>Course Code</td>
// 							<td>{course_code}</td>
// 						</tr>
// 						<tr>
// 							<td>Department</td>
// 							<td>{departmentName}</td>
// 						</tr>
// 						<tr>
// 							<td>Title</td>
// 							<td>{title}</td>
// 						</tr>
// 						<tr>
// 							<td>Start Time</td>
// 							<td>{start_time}</td>
// 						</tr>
// 						<tr>
// 							<td>End Time</td>
// 							<td>{end_time}</td>
// 						</tr>
// 						<tr>
// 							<td>Course Load</td>
// 							<td>{course_credit}</td>
// 						</tr>
// 						<tr>
// 							<td>Current Density</td>
// 							<td>{courseDensity}</td>
// 						</tr>
// 						<tr>
// 							<td>Instructor</td>
// 							<td>{`${profLName}, ${profFName}`}</td>
// 						</tr>
// 					</tbody>
// 				</table>
// 				<div className='pull-left'>
// 					<p className='table-paragraph'>Course Description</p>
// 					<p>{course_description}</p>
// 				</div>
// 			</main>
// 		);
// 	}
// }

// export default CourseShow;