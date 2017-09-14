import React from 'react';
import ReactDOM from 'react-dom';


class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showCourse = this.showCourse.bind(this);
  }


  showCourse() {
		const id = this.props.course.id;
		window.location.hash = `courses/${this.props.course.id}`;
	};


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
		} = this.props.course;

    return (
			<tr onClick={this.showCourse}>
				<td>{course_code}</td>
				<td>{title}</td>
				<td>{start_time.slice(11,16)}</td>
				<td>{end_time.slice(11,16)}</td>
				<td>{course_credit}</td>
				<td>{students.length}/{course_cap}</td>
				<td>{`${professor.lname}, ${professor.fname.slice(0,1).toUpperCase()}`}</td>
			</tr>
    );
  }
}

export default Course;