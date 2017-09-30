import React from 'react';

class SidebarUser extends React.Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    window.location.hash = `/${this.props.currentUser.username}/users/${this.props.user.id}`;
  }

  render() {
    return (
			<div className='sidebar-user-img'> 
        <li>
					<div onClick={this.showUser}>
						<img  src={this.props.user.profile_image_url} />
					</div>
					<div onClick={this.showUser} className='clickable-username'>
						<h6>{this.props.user.username}</h6>
					</div>
				</li>
			</div>
    );
  }
}

export default SidebarUser;
