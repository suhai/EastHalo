import React from 'react';
import ReactDOM from 'react-dom';

class CourseEnrollment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
		};
		this.deleteCourseEnrollment = this.deleteCourseEnrollment.bind(this);
	};

	deleteCourseEnrollment() {
		this.props.deleteCourseEnrollment(this.props.enrollment.id)
	};

  render() {
		const { 
			id, 
			course,
			student,
			professor,
			load
		} = this.props.enrollment;

    return (
			<tr>
				<td>{id}</td>
				<td>{course}</td>
				<td>{student}</td>
				<td>{professor}</td>
				<td>{load}</td>
				<td onClick={this.deleteCourseEnrollment}>Delete</td>
			</tr>
    );
  }
}

export default CourseEnrollment;