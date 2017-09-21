import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
	};
	
	showUser() {
		window.location.hash = `/${this.props.currentUser.username}/users/${this.props.user.id}`;
	};

  render() {
    return (
      <li className='search-show'>
        <img onClick={this.showUser} src={this.props.user.profile_image_url} />
        <span onClick={this.showUser}>{`${this.props.user.fname}, ${this.props.user.lname}`}</span>
      </li>
    );
  }
}

export default User;