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
      <nav className='navigation'>
        <ul>
          <li className='loggedhome-logo'><img src='https://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg'/></li>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/'>Portfolio</NavLink></li>
          <li><NavLink to='/'>Trivia</NavLink></li>
          <li><NavLink to='/'>Monkeys</NavLink></li>
          <li><NavLink to='/'>Games</NavLink></li>
          <li><NavLink to='/t'>Tech News</NavLink></li>
        </ul>
        <ul className='searchbar'>
          <input onKeyPress={this.toSearch} className='home-search'></input>
        </ul>
      </nav>
    );
  }
}

export default PublicNavigation;