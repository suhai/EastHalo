import React from 'react';
import { values, merge } from 'lodash';

class CourseShow extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			course: {}
		};
	}
	
	componentWillMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
	}
	
	componentWillReceiveProps(props) {
		this.setState({
			course: Object.keys(props.courses).length > 0 ? props.courses[props.match.params.id] : {}
		});

		console.log('hellooooo', this.state)
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
				{/* <li><span>Current Size: {students.length} / {course_cap}</span></li> 
				<li><span>Instructor: {professor.lname}</span></li> */}
      </main>
    );
  }
}

export default CourseShow;