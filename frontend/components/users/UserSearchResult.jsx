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
      <main className='user-page'>
					<div className="img-gallery" onClick={this.showUser}>
						<div className="gallery">
							<img src="https://res.cloudinary.com/swy/image/upload/v1499749804/images/diver.svg" alt="Diver" width={300} height={200} />
						</div>
					</div>
					<hr/>
				<div>
					<div className='course-header'>
						{this.props.user.username}
					</div>
				</div>
				<hr />	
			</main>
    );
  }
}

export default User;