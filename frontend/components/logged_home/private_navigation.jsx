import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class PrivateNavigation extends React.Component {
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
			<header className='shared-header'>
				<nav className='navigation'>
					<ul>
						<li><NavLink exact to='/loggedhome'>Home</NavLink></li>
						<li><NavLink to='/one'>Nav One</NavLink></li>
						<li><NavLink to='/two'>Nav Two</NavLink></li>
						<li><NavLink to='/three'>Nav Three</NavLink></li>
						<li><NavLink to='/four'>Nav Four</NavLink></li>
						<li><NavLink to='/five'>Nav Five</NavLink></li>
					</ul>
					<ul className='searchbar'>
						<input onKeyPress={this.toSearch} className='search'></input>
					</ul>
					<ul>
          	<li className={`nav-user`}>
							<p tabIndex='0' onBlur={this.closeSettings}
								onClick={this.toggleSettings}
								className={`user ${this.state.isActive}`}>
								{this.props.currentUser.username} ❯❯
							</p>
							<ul id='user-settings' className={this.state.isActive}>
								<li>
									<Link to={`/${this.props.currentUser.username}`}>Profile</Link>
								</li>
								<li>
									<Link to={`/${this.props.currentUser.friends}`}>Friends</Link>
								</li>
								<li>
									<Link to={`/${this.props.currentUser.posts}`}>Posts</Link>
								</li>
								<li id='signout' onClick={this.logout}>Sign out</li>
							</ul>
          	</li>
        	</ul>
				</nav>
			</header>
    );
  }
}

export default PrivateNavigation;