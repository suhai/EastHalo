import React from 'react';
import ReactDOM from 'react-dom';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.showCourse = this.showCourse.bind(this);
  }


  showCourse() {
		const id = this.props.course.id;
		window.location.hash = `courses/${this.props.course.id}`;
  }


  render() {

    return (
      <div>
				<span>{this.props.course.course_code.toString().slice(0,7)}</span>
				<span>{this.props.course.title.toString().slice(0,8)}</span>
				<span>{this.props.course.start_time.toString().slice(0,5)}</span>
				<span>{this.props.course.end_time.toString().slice(0,5)}</span>
				<span>{this.props.course.professor.fname.toString().slice(0,10)}</span>
				<span>{this.props.course.course_credit.toString().slice(0,3)}</span>
				<button onClick={this.showCourse} className=''>Details</button>
      </div>
    );
  }
}

export default Course;