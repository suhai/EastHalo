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
		const { 
			fname, 
			lname, 
			email, 
			phone_number, 
			username,
			profile_image_url
		} = this.props.user;

    return (
			<div className="img-gallery" onClick={this.showUser}>
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
    );
  }
}

export default User;