import React from 'react';
import { values } from 'lodash';
import UserPageBottomContainer from './user_page_bottom_container';
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
  }

  uploadProfile(files) {
    let profile = files[0];

    let image = new FormData();
    image.append('user[profile_image_url]', profile);

    this.props.editUser(image, this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    let user = this.props.user || {};
    if (nextProps.match.params.username != user.username) {
      window.scrollTo(0, 0)
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    let username = this.props.match.params.username;
    this.props.fetchUser(username);
  }

  render() {
    let image = '';
    let header = '';
    if (this.props.user.id === this.props.currentUser.id) {
      image = (<Dropzone className='dropzone' onDrop={this.uploadProfile}>
                <span>Upload image</span>
              </Dropzone>);
    }
    let user = this.props.user || { user: { username: '' }, title: '', image_url: '' };
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
        <UserPageBottomContainer currentUser={this.props.currentUser} />
      </main>
    );
  }
}

export default UserPage;