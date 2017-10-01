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
		let adminLink = !!(this.props.currentUser.is_admin) ?
		<li><NavLink to='/admin'>Admin</NavLink></li> :
		<li><NavLink to='/settings'>Admin</NavLink></li>;

    return (
			<header className='shared-header'>
				<nav className='navigation'>
					<ul>
						<li><NavLink to='/subhome'>Community</NavLink></li>
						<li><NavLink to='/registrar'>Registrar</NavLink></li>
						<li><NavLink to='/news'>EHU News</NavLink></li>
						<li><NavLink to='/cafeteria'>Cafeteria</NavLink></li>
						<li><NavLink to='/bookstore'>BookStore</NavLink></li>
						{adminLink}
					</ul>
					<ul className='searchbar'>
						<input onKeyPress={this.toSearch} placeholder="Search for Users"  className='search'></input>
					</ul>
					<ul>
						<div className="dropdown">
							<button className="dropbtn">{this.props.currentUser.username} ❯❯</button>
							<div className="dropdown-content profile-menu">
							<Link to={`/${this.props.currentUser.username}/profile/me`}>Profile</Link>
							<NavLink to={`/${this.props.currentUser.username}/profile/transcript`}>Transcript</NavLink>
							<NavLink to='/' onClick={this.logout}>Sign Out</NavLink>
							</div>
						</div>
        	</ul>
				</nav>
			</header>
    );
  }
}

export default PrivateNavigation;

