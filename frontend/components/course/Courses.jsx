import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Course from './Course';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
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


class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: true,
			showRowHover: false,
			selectable: true,
			multiSelectable: false,
			enableSelectAll: false,
			deselectOnClickaway: true,
			showCheckboxes: false,
			height: '300px',
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
		// let courses = courseList.map( (course, idx) => (
		// 	<TableRow key={idx} >
		// 		<TableRowColumn>{idx + 1}</TableRowColumn>
		// 		<TableRowColumn>{course.course_code}</TableRowColumn>
		// 		<TableRowColumn>{course.title}</TableRowColumn>
		// 		<TableRowColumn>{course.start_time}</TableRowColumn>
		// 		<TableRowColumn>{course.end_time}</TableRowColumn>
		// 		<TableRowColumn>{course.course_credit}</TableRowColumn>
		// 		<TableRowColumn>{course.students.length} / {course.course_cap}</TableRowColumn>
		// 		<TableRowColumn>{course.professor.lname}</TableRowColumn>
		// 		<RaisedButton backgroundColor="#a4c639" icon={<ActionAndroid color={fullWhite} />} style={style} />
		// 	</TableRow>
		// 	));

    return (
      <div className=''>
				<div><button className='btn create' onClick={this.renderForm}>Create Course</button></div>	
				<Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable} >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll} >
            <TableRow>
							<TableHeaderColumn tooltip="The Code">Code</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Title">Title</TableHeaderColumn>
							<TableHeaderColumn tooltip="Start Time">From</TableHeaderColumn>
							<TableHeaderColumn tooltip="End Time">To</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Load">Load</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Size">Size</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Prof">Instructor</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Link">Link</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows} >

            {courses}

          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes} >
            <TableRow>
              <TableRowColumn>Code</TableRowColumn>
              <TableRowColumn>Title</TableRowColumn>
              <TableRowColumn>From</TableRowColumn>
							<TableRowColumn>To</TableRowColumn>
              <TableRowColumn>Load</TableRowColumn>
              <TableRowColumn>Size</TableRowColumn>
							<TableRowColumn>Instructor</TableRowColumn>
              <TableRowColumn>Link</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

      </div>
    );
  }
}

export default Courses;