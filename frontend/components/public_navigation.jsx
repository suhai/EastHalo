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
						<li className='loggedhome-logo'><img src='https://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg'/></li>
						<li><NavLink exact to='/H'>Home</NavLink></li>
						<li><NavLink to='/A'>Nav A</NavLink></li>
						<li><NavLink to='/B'>Nav B</NavLink></li>
						<li><NavLink to='/C'>Nav C</NavLink></li>
						<li><NavLink to='/D'>Nav D</NavLink></li>
						<li><NavLink to='/E'>Nav E</NavLink></li>
					</ul>
					<ul className='searchbar'>
						<input onKeyPress={this.toSearch} className='search'></input>
						<li><NavLink to='/F'>Nav F</NavLink></li>
						<li><NavLink to='/G'>Nav G</NavLink></li>
					</ul>
				</nav>
			</header>
    );
  }
}

export default PublicNavigation;