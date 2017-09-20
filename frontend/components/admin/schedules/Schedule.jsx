import React from 'react';
import ReactDOM from 'react-dom';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showSchedule = this.showSchedule.bind(this);
  };


  showSchedule() {
		window.location.hash = `admin/${this.props.currentUser.username}/schedules/${this.props.user.id}`;
	};


  render() {
		const { 
			id, 
			fname, 
			lname, 
		} = this.props.user;

    return (
			<tr onClick={this.showSchedule}>
				<td>{id}</td>
				<td>{fname}</td>
				<td>{lname}</td>
			</tr>
    );
  }
}

export default Schedule;