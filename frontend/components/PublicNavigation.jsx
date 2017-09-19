import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class PublicNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
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

  render() {
    return (
			<header className='shared-header'>
				<nav className='navigation'>
					<ul>
						<li><NavLink exact to='/'>Home</NavLink></li>
						<li><NavLink to='/admission'>Admission</NavLink></li>
						<li><NavLink to='/academics'>Academics</NavLink></li>
						<li><NavLink to='/campus'>Campus</NavLink></li>
						<li><NavLink to='/athletics'>Athletics</NavLink></li>
						<li><NavLink to='/events'>Events</NavLink></li>
					</ul>
					<ul className='searchbar'>
						<input onKeyPress={this.toSearch} className='search'></input>
						<li><NavLink to='/swy_info'>Alumni</NavLink></li>
						<li><NavLink to='/enquiries/messageform'>Contact</NavLink></li>
					</ul>
				</nav>
			</header>
    );
  }
}

export default PublicNavigation;