import React from 'react';
import { values, merge } from 'lodash';

class CourseShow extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
  }

  render() {
 
    return (
      <main className='user-page'>
				<h3>THIS IS THE COURSE SHOW PAGE</h3>
				<li><span>Course Code: {this.props.course.course_code}</span></li>
				<li><span>Department: Chemistry</span></li>
				<li><span>Title: {this.props.course.title}</span></li>
				<li><span>Start Time: {this.props.course.start_time}</span></li>
				<li><span>End Time: {this.props.course.end_time}</span></li>
				<li><span>Instructor: {this.props.course.professor}</span></li>
				<li><span>Course Load: {this.props.course.course_credit}</span></li>
				<li><span>Course Description: {this.props.course.course_description}</span></li>
				<li><span>Current Size: `${this.props.course.students} / {this.props.course.course_cap}`</span></li> 
      </main>
    );
  }
}

export default CourseShow;