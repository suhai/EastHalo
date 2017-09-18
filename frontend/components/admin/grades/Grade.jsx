import React from 'react';
import ReactDOM from 'react-dom';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showGrade = this.showGrade.bind(this);
  }


  showGrade() {
		window.location.hash = `/admin/${this.props.currentUser.username}/grades/${this.props.grade.id}`;
	};


  render() {
		const { 
			student,
			professor, 
			course, 
			grade_letter, 
			weight, 
			comment, 
		} = this.props.grade;

    return (
			<tr onClick={this.showGrade}>
				<td>{student.lname}</td>
				<td>{course.course_code}</td>
				<td>{grade_letter.letter}</td>
				<td>{weight}</td>
				<td>{professor.lname}</td>
				<td>{comment.slice(0,10)}</td>
			</tr>
    );
  }
}

export default Grade;