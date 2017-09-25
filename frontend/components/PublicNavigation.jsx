import React from 'react';
import { NavLink, Link } from 'react-router-dom';
let lighthouse = 'https://res.cloudinary.com/swy/image/upload/v1499750283/images/lighthouse.svg';

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
						<li><img className="read" src={lighthouse} height={40} width={40} /></li>
						<li><NavLink exact to='/'>Home</NavLink></li>
						<li><NavLink to='/admission'>Admissions</NavLink></li>
						<li><NavLink to='/academics'>Academics</NavLink></li>
						<li><NavLink to='/campus'>Campus</NavLink></li>
						<li><NavLink to='/athletics'>Athletics</NavLink></li>
						<li><NavLink to='/alumni'>Alumni</NavLink></li>
					</ul>
					<ul className='searchbar'>
						<form className="search-form">
							<input type="text" placeholder="Search University Directory" />
							<button type="submit" className="search-btn">Search</button>
						</form>
					</ul>
				</nav>
			</header>
    );
  }
}

export default PublicNavigation;