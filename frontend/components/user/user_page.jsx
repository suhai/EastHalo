import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Dropzone from 'react-dropzone';


var superagent = require('superagent');
const UPLOAD_PRESET = 'cgbryuxc';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ''
    };
		this.uploadProfile = this.uploadProfile.bind(this);
		this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
		let user = this.props.user || {};
		let l = nextProps.location.pathname.length;
    if (nextProps.match.params.username != user.username) {
      window.scrollTo(0, 0)
		}
		
    if (nextProps.location.pathname !== this.props.location.pathname) {
      let username = nextProps.match.params.username;
      this.props.fetchUser(username);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    let username = this.props.match.params.username;
    this.props.fetchUser(username);
	}
	
	editUser() {
		let user = this.props.currentUser;
    this.props.history.push(`/${user.username}/edit`);
  }

  deleteUser() {
    
	}
	
	uploadProfile(files) {
    let profile = files[0];
    let image = new FormData();
    image.append('user[profile_image_url]', profile);

    this.props.editUser(image, this.props.user.id);
  }

  render() {
		let user = this.props.user || { user: { username: '' }, title: '', image_url: '' };
    let image = '';
    let header = '';
    if (this.props.user.id === this.props.currentUser.id) {
      image = (<Dropzone className='dropzone' onDrop={this.uploadProfile}>
                <span>Upload image</span>
              </Dropzone>);
    }
    
    return (
      <main className='user-page'>
        <section className='user-content'>
          <img src="" />
          <div className='user-avatar-box'>
            <div className='user-avatar' >
              <img src={this.props.user.profile_image_url} />
              {image}
            </div>
          </div>
          <ul className='user-page-info'>
            {header}
          </ul>
        </section>
        <section className='user-page-bottom'>
					<ul className='user-page-nav'>
						<li className='user-page-options'>
						<button onClick={this.editUser} className='user-page-edit'>Edit</button>
						<button className='user-page-delete'>Delete</button>
						</li>
					</ul>
      	</section>
      </main>
    );
  }
}

export default UserPage;