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
        <li><img onClick={this.showUser} src={this.props.user.profile_image_url} />
				<span onClick={this.showUser}>{this.props.user.username}</span></li>
			</div>
      
    );
  }
}

export default SidebarUser;
