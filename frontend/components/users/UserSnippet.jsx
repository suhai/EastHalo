import React from 'react';

class UserSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.showUser = this.showUser.bind(this);
	};

	showUser() {
		window.location.hash = `/${this.props.currentUser.username}/users/${this.props.user.id}`;
	};


  render() {
		const { 
			fname, 
			lname, 
			email, 
			phone_number, 
			username
		} = this.props.user;

    return (
			<div>
				<div onClick={this.showUser}>
					<p>{fname}</p>
					<p>{lname}</p>
					<p>{username}</p>
					<p>{email}</p>
					<p>{phone_number}</p>
				</div>
				
				<div>USER SNIPPET GOES HERE</div>
				<hr/>
			</div>
    );
  }
}

export default UserSnippet;