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
		console.log('editing course ......')
	};
	
	deleteCourse() {
		console.log('deleting course ......')
		window.location.hash = '/registrar';
	};
	
	componentWillReceiveProps(props) {
		Object.keys(props.courses).length > 0 ?
			this.setState({
				course: props.courses[props.match.params.id],
				classSize: props.courses[props.match.params.id].students.length,
				courseCap: props.courses[props.match.params.id].course_cap,
				courseDensity: (props.courses[props.match.params.id].students.length / props.courses[props.match.params.id].course_cap),
				profLName: props.courses[props.match.params.id].professor.lname,
				profFInitial: props.courses[props.match.params.id].professor.fname.slice(0,1)
			}) :
			this.setState({
				course: {},
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
			start_time, 
			end_time, 
			course_credit, 
			course_cap, 
			course_description,
			professor,
			students
		} = this.state.course;

		const { 
			courseDensity,
			profLName,
			profFInitial
		} = this.state;

    return (
      <main className='user-page'>
				<h3>THIS IS THE COURSE SHOW PAGE</h3>
				<li><span>Course Code: {course_code}</span></li>
				<li><span>Department: Chemistry</span></li>
				<li><span>Title: {title}</span></li>
				<li><span>Start Time: {start_time}</span></li>
				<li><span>End Time: {end_time}</span></li>
				<li><span>Course Load: {course_credit}</span></li>
				<li><span>Course Description: {course_description}</span></li>
				<li><span>Current Density: {courseDensity}</span></li> 
				<li><span>Instructor: {`${profLName}, ${profFInitial.toUpperCase()}`}.</span></li>

				<div>
					<div><button className='btn edit' onClick={this.editCourse}>Edit Course</button></div>	
					<div><button className='btn delete' onClick={this.deleteCourse}>Delete Course</button></div>
				</div>
      </main>
    );
  }
}

export default CourseShow;