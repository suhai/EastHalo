import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: ''};
    this.logout = this.logout.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    window.location.hash = '/';
  }

  showProfile() {
    window.location.hash = `/${this.props.currentUser.username}`;
  }

  toSearch(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      window.location.hash = `/search?q=${e.target.value}`;
      e.target.value = '';
    }
  }

  toggleSettings() {
    if (this.state.isActive === '') {
      this.setState({ isActive: 'active' });
    } else {
      this.setState({ isActive: '' });
    }
  }

  closeSettings() {
    setTimeout(() => {
      this.setState({ isActive: '' });
    }, 200);
  }


  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li className='loggedhome-logo'><img src='https://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg'/></li>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/'>Categories</NavLink></li>
          <li><NavLink to='/'>Users</NavLink></li>
          <li><NavLink to='/'>JobApps</NavLink></li>
          <li><NavLink to='/'>Trivia</NavLink></li>
          <li><NavLink to='/'>Projects</NavLink></li>
          <li><NavLink to='/'>Games</NavLink></li>  
        </ul>
        <ul className='searchbar'>
          <input onKeyPress={this.toSearch} className='home-search'></input>
        </ul>
        <ul>
          <li className={`nav-user`}>
            <p tabIndex='0' onBlur={this.closeSettings}
              onClick={this.toggleSettings}
              className={`user ${this.state.isActive}`}>{this.props.currentUser.username} ❯</p>
            <ul id='user-settings' className={this.state.isActive}>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Profile</Link>
              </li>
              <li>
                <Link to={`/profile/favorites`}>Favorites</Link>
              </li>
              <li>
                <Link to={`/profile/activities`}>Activities</Link>
              </li>
              <li>
                <Link to={`/profile/stories`}>Stories</Link>
              </li>
              <li id='signout' onClick={this.logout}>Sign out</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;