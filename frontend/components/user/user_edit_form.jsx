import React from 'react';
import Dropzone from 'react-dropzone';
import { merge } from 'lodash';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      profile_image_url: { preview: '' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.toUserPage = this.toUserPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user;
    if (user.id !== undefined) {
      this.setState({
        id: user.id,
        description: user.description,
        profile_image_url: { preview: user.profile_image_url }
      });
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  toUserPage() {
    this.props.history.push(`/${this.props.match.params.username}`);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value});
  }

  uploadImage(files) {
    this.setState({ profile_image_url: files[0] });
  }

  submitProfile() {
    let profile = this.state.profile_image_url;
    let image = new FormData();
    image.append('user[profile_image_url]', profile);
    this.props.editUser(image, this.state.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let profile = this.state.profile_image_url;
    let header = this.state.header_image_url;

    if (profile.preview !== this.props.user.profile_image_url &&
    header.preview === this.props.user.header_image_url) {
      this.submitProfile();

    } else if (profile.preview !== this.props.user.profile_image_url &&
    header.preview !== this.props.user.header_image_url) {
      this.submitProfile();
    }
    let description = new FormData();
    description.append('user[description]', this.state.description);
    this.props.editUser(description, this.state.id)
      .then(this.props.history.push(`/${this.props.user.username}`));
  }

  render() {
    return (
      <section className='upload-main'>
        <div className='upload-info' />
        <div className='upload-box active user-edit'>
          <ul>
            <h1>User Details</h1>
          </ul>
          <ul className='upload-prop active'>
            <ul className='upload-prop-description'>
              <li className='profile-image'>
                <img src={this.state.profile_image_url.preview} />
                <Dropzone onDrop={this.uploadImage} className='dropzone'>
                  <button className='upload-image'>Upload Image</button>
                </Dropzone>
              </li>
              <ul className='upload-prop-info'>
              Profile Description
              <textarea rows='11' onChange={this.update('description')} value={this.state.description}></textarea>
              </ul>
            </ul>
            <div className='upload-buttons'>
              <button onClick={this.toUserPage} className='cancel'>Cancel</button>
              <button onClick={this.handleSubmit} className='addnew'>Save</button>
            </div>
          </ul>
        </div>
      </section>
    );
  }
}

export default UserEditForm;