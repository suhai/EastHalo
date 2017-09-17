import React from 'react';
import ReactDOM from 'react-dom';

class SingleNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showNews = this.showNews.bind(this);
  }


  showNews() {
		// const id = this.props.course.id;
		window.location.hash = `news/${this.props.news.id}`;
	};


  render() {
		// const { 
		// 	course_code, 
		// 	title, 
		// 	start_time, 
		// 	end_time, 
		// 	course_credit, 
		// 	course_cap, 
		// 	course_description
		// } = this.props.course;
	
		// let classSize = 0;
		// let profLName = '';
		// let profFInitial = '';
		// if (this.props.course.length) {
		// 	classSize = this.props.course.students.length;
		// };
		// if (this.props.course.professor) {
		// 	profLName = this.props.course.professor.lname;
		// 	profFInitial = this.props.course.professor.fname.slice(0,1).toUpperCase();
		// };

    return (
			<tr onClick={this.showNews}>
				{/* <td>{course_code}</td>
				<td>{title}</td>
				<td>{start_time.slice(11,16)}</td>
				<td>{end_time.slice(11,16)}</td>
				<td>{course_credit}</td>
				<td>{classSize}/{course_cap}</td>
				<td>{`${profLName}, ${profFInitial}`}</td> */}
				<td>THIS IS A NEWS PLACEHOLDER</td>
			</tr>
    );
  }
}

export default SingleNews;