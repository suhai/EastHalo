import React from 'react';
import ReactDOM from 'react-dom';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showFriend = this.showFriend.bind(this);
	};


  showFriend() {
		window.location.hash = `/${this.props.currentUser.username}/users/${this.props.friend.id}`;
	};


  render() {
		const { 
			fname, 
			lname, 
			email, 
			phone_number, 
			username
		} = this.props.friend;

    return (
			<tr onClick={this.showFriend}>
				<td>{fname}</td>
				<td>{lname}</td>
				<td>{username}</td>
				<td>{email}</td>
				<td>{phone_number}</td>
			</tr>
    );
  }
}

export default Friend;