import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const style = {
  margin: 12,
};



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
			<TableRow>
				<TableRowColumn>{course_code}</TableRowColumn>
				<TableRowColumn>{title}</TableRowColumn>
				<TableRowColumn>{start_time}</TableRowColumn>
				<TableRowColumn>{end_time}</TableRowColumn>
				<TableRowColumn>{course_credit}</TableRowColumn>
				<TableRowColumn>{students.length} / {course_cap}</TableRowColumn>
				<TableRowColumn>{professor.lname}</TableRowColumn>
				<TableRowColumn><RaisedButton backgroundColor="#a4c639" icon={<ActionAndroid color={fullWhite} />} style={style} onClick={this.showCourse}/></TableRowColumn>
			</TableRow>
    );
  }
}

export default Course;