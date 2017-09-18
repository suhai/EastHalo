import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showUser = this.showUser.bind(this);
  }


  showUser() {
		console.log('showing user .....');
		window.location.hash = `admin/${this.props.currentUser.username}/users/${this.props.user.id}`;
	};


  render() {
		const { 
			username,
			fname, 
			lname, 
			email, 
			type, 
			gender,
			cash_balance, 
			dob
		} = this.props.user;

    return (
			<tr onClick={this.showUser}>
				<td>{username}</td>
				<td>{fname}</td>
				<td>{lname}</td>
				<td>{dob}</td>
				<td>{email}</td>
				<td>{type}</td>
				<td>{gender}</td>
				<td>{cash_balance}</td>
			</tr>
    );
  }
}

export default User;