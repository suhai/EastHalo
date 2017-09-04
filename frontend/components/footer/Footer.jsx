import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <ul>
            <li className="resume"><a href='#'>Campus Map</a></li>
            <li className="resume"><a href='#'>Jobs</a></li>
          </ul>
          <ul>
            <li><a href="mailto:swy@tikldmonkey.com"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/mail.svg" /></a></li>
            <li><a href="https://www.facebook.com/suhaiy"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/facebook.svg" /></a></li>
            <li><a href="https://www.facebook.com/suhaiy"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/twitter.svg" /></a></li>
						<li><a href="https://www.facebook.com/suhaiy"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/twitter.svg" /></a></li>
						<li><a href="https://www.facebook.com/suhaiy"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/twitter.svg" /></a></li>
          </ul>
          <ul>
            <p className='logo-name resume'>EastHalo ©</p>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
