import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Course from './Course';


class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	
    };
		this.addCourse = this.addCourse.bind(this);
		this.renderForm = this.renderForm.bind(this);
	};
	
	showCourse() {
		const id = this.props.course.id;
		window.location.hash = `courses/${this.props.course.id}`;
	};
	
	renderForm() {
		window.location.hash = 'registrar/courseform';
  }

	handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange(event) {
    this.setState({height: event.target.value});
	};
	
  componentDidMount() {
		this.props.fetchCourses();
  }

  addCourse() {

	}
	

  render() {
		let courseList = values(this.props.courses);
    let courses = courseList.map( (course, idx) => (
			<Course key={idx} course={course} />
			));

    return (
      <div className=''>
				<div><button className='btn create' onClick={this.renderForm}>Create Course</button></div>	
			
				<table id="gradient-style" summary="Meeting Results">
					<thead>
						<tr>
							<th scope="col">Code</th>
							<th scope="col">Title</th>
							<th scope="col">From</th>
							<th scope="col">To</th>
							<th scope="col">Load</th>
							<th scope="col">Size</th>
							<th scope="col">Instructor</th>
							<th scope="col">More</th>
						</tr>
					</thead>

					<tbody>
						{courses}
					</tbody>

				</table>
				<p>
					Give background color to the table cells to achieve seamless transition
				</p>
      </div>
    );
  }
}

export default Courses;