import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <p>© EastHalo</p>
          <p className="a-center">
            <a href="#">2017 College of The Year</a>
          </p>
          <p className="a-right">2020 Avocado Road, Farmington, CA</p>
        </div>
      </div>
    );
  }
}

export default Footer;
