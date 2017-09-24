import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <p>© 2014 BestBite</p>
          <p className="a-center">
            <a href="#">BestBite.com</a>
          </p>
          <p className="a-right">12 Greentree Lane, Orlando, FL</p>
        </div>
      </div>
    );
  }
}

export default Footer;
