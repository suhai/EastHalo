import React from 'react';
import { values, merge } from 'lodash';

class Profile extends React.Component {
  constructor(props) {
		super(props);	
		this.renderEditForm = this.renderEditForm.bind(this);
	};
	
	renderEditForm() {
		window.location.hash = `/${this.props.currentUser.username}/profile/edit`
	};

  render() {
		const { 
			id,
			username,
			fname, 
			lname, 
			email, 
			type, 
			gender,
			gpa,
			phone_number,
			current_course_load,
			completed_course_credit,
			profile_image_url,
			friends,
			posts,
			comments,
			courses,
			cash_balance, 
		} = this.props.currentUser;
 
    return (
      <main className='user-page'>
				<button className='btn edit' onClick={this.renderEditForm}>Edit Profile</button>
        <h3>THIS IS THE PROFILE PAGE</h3>
				<h5>Image Goes Here: {profile_image_url}</h5>
				<h5>USER ID: {id}</h5>
				<h5>Username: {username}</h5>
				<h5>First Name: {fname}</h5>
				<h5>Last Name: {lname}</h5>
				<h5>Email: {email}</h5>
				<h5>User Type: {type}</h5>
				<h5>Gender: {gender}</h5>
				<h5>Commulative GPA: {gpa}</h5>
				<h5>Account Balance: {cash_balance}</h5>
				<h5>Phone Number: {phone_number}</h5>
				<h5>Course Load This Semester: {current_course_load}</h5>
				<h5>Number of Friends: {friends.length}</h5>
				<h5>Number of Posts: {posts.length}</h5>
				<h5>Number of Comments: {comments.length}</h5>
				<h5>Home Address: </h5>
      </main>
    );
  }
}

export default Profile;