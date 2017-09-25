import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <p>© EastHalo</p>
          <p className="a-center">
            <a href="#">Univeristy of EastHalo</a>
          </p>
          <p className="a-right">2020 Avocado Road, EastHalo, CA</p>
        </div>
      </div>
    );
  }
}

export default Footer;
