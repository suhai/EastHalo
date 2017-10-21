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
			posts,
			comments,
			courses,
			cash_balance, 
			friends
		} = this.props.currentUser;
 
    return (
      <main className='user-page'>
				<div className="img-gallery">
					<div className="gallery">
						<img src={profile_image_url} alt={username} />
						<div className="desc">
							<div>
								<p>{username}</p>
							</div>
						</div>
					</div>
					<hr/>
				</div>

				<div className='profile-page-detail'>
					<div className='profile-detail-table'>
						<button className='btn edit' onClick={this.renderEditForm}>Edit Self</button>
						<table>
							<tbody>
								<tr>
									<th className='profile-table-header'>User Information</th>
									<th className='profile-table-header'>Details</th>
								</tr>
								<tr>
									<td>USER ID</td>
									<td>{id}</td>
								</tr>
								<tr>
									<td>Username</td>
									<td>{username}</td>
								</tr>
								<tr>
									<td>First Name</td>
									<td>{fname}</td>
								</tr>
								<tr>
									<td>Last Name</td>
									<td>{lname}</td>
								</tr>
								<tr>
									<td>Email</td>
									<td>{email}</td>
								</tr>
								<tr>
									<td>Phone Number</td>
									<td>{phone_number}</td>
								</tr>
								<tr>
									<td>Current User Type</td>
									<td>{type}</td>
								</tr>
								<tr>
									<td>Gender</td>
									<td>{gender}</td>
								</tr>
								<tr>
									<td>Cummulative GPA</td>
									<td>{gpa}</td>
								</tr>
								<tr>
									<td>Account Balance</td>
									<td>{cash_balance}</td>
								</tr>
								<tr>
									<td>Current Course Load</td>
									<td>{current_course_load}</td>
								</tr>
								<tr>
									<td>Number of Friends</td>
									<td>{friends.length}</td>
								</tr>
								<tr>
									<td>Number of Posts</td>
									<td>{posts.length}</td>
								</tr>
								<tr>
									<td>Number of Comments</td>
									<td>{comments.length}</td>
								</tr>
								<tr>
									<td>Home Address</td>
									<td>Not Yet Available</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
      </main>
    );
  }
}

export default Profile;