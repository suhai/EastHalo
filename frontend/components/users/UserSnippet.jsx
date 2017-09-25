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
			username,
			profile_image_url
		} = this.props.user;

    return (
			<div class="img-gallery" onClick={this.showUser}>
				<div className="gallery">
					<img src="https://res.cloudinary.com/swy/image/upload/v1499749804/images/diver.svg" alt="Diver" width={300} height={200} />
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

export default UserSnippet;