import React from 'react';
import ReactDOM from 'react-dom';

class Transcript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showTranscript = this.showTranscript.bind(this);
  };


  showTranscript() {
		window.location.hash = `admin/${this.props.currentUser.username}/transcripts/${this.props.user.id}`;
	};


  render() {
		const { 
			id, 
			fname, 
			lname, 
			completed_course_credit,
			gpa, 
		} = this.props.user;

    return (
			<tr onClick={this.showTranscript}>
				<td>{id}</td>
				<td>{fname}</td>
				<td>{lname}</td>
				<td>{completed_course_credit}</td>
				<td>{gpa}</td>
			</tr>
    );
  }
}

export default Transcript;