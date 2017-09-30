import React from 'react';

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
			username,
			gender,
			phone_number, 
			email
		} = this.props.friend;

    return (
			<tr onClick={this.showFriend}>
				<td>{fname}</td>
				<td>{lname}</td>
				<td>{username}</td>
				<td>{gender}</td>
				<td>{phone_number}</td>
				<td>{email}</td>
			</tr>
    );
  }
}

export default Friend;