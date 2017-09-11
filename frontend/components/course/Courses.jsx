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
  }

  componentDidMount() {
		this.props.fetchCourses();
  }

  addCourse() {

  }

  render() {
    let courses = values(this.props.courses).map( (course, idx) => (
      <Course key={idx} course={course} />
    ));

    return (
      <div className=''>
				<ul className=''>
					<div className="">
						<span className="">Code</span> 
						<span className="">Title</span>
						<span className="">From</span> 
						<span className="">To</span>  
						<span className="">Instructor</span> 
						<span className="">Load</span> 
						<span className="">Link</span> 
					</div>
					
					{courses}
				</ul>
      </div>
    );
  }
}

export default Courses;