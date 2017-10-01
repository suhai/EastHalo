import React from 'react';
import ReactDOM from 'react-dom';

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showClass = this.showClass.bind(this);
  }

  showClass() {
		window.location.hash = `registrar/courses/${this.props.course.id}`;
	};

	componentDidMount() {
		console.log(this.props.course);
		// debugger;
	};

  render() {
		const { 
			course_code, 
			title, 
			start_time, 
			end_time, 
			course_credit, 
			course_cap, 
			course_description
		} = this.props.course;
	
		let classSize = 0;
		let profLName = '';
		let profFInitial = '';
		if (this.props.course.length) {
			classSize = this.props.course.students.length;
		};
		if (this.props.course.professor) {
			profLName = this.props.course.professor.lname;
			profFInitial = this.props.course.professor.fname.slice(0,1).toUpperCase();
		};

    return (
			<tr onClick={this.showClass}>
				<td>{course_code}</td>
				<td>{title}</td>
				<td>{start_time.slice(11,16)}</td>
				<td>{end_time.slice(11,16)}</td>
				<td>{course_credit}</td>
				<td>{classSize}/{course_cap}</td>
				<td>{`${profLName}, ${profFInitial}`}</td>
			</tr>
    );
  }
}

export default MyClass;