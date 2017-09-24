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
		} = this.props.user;

    return (
				<tr onClick={this.showUser}>
					<td>{username}</td>
					<td>{fname}</td>
					<td>{lname}</td>
					<td>{type}</td>
					<td>{gender}</td>
					<td>{cash_balance}</td>
					<td>{email}</td>
				</tr>
    );
  }
}

export default User;