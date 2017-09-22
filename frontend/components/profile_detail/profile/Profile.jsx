import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
		super(props);
		
		this.renderEditForm = this.renderEditForm.bind(this);
	};
	
	renderEditForm() {
		window.location.hash = `/${this.props.currentUser.username}/profile/edit`
	};

  render() {
 
    return (
      <main className='user-page'>
				<button className='btn edit' onClick={this.renderEditForm}>Edit Profile</button>
        <h3>THIS IS THE PROFILE PAGE</h3>
      </main>
    );
  }
}

export default Profile;