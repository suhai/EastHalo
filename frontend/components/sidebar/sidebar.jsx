import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0, userIds: [], songIds: [] };
  }

  render() {

    return (
      <aside className='loggedhome-sidebar'>
				<div className="updates">
					<ul>
						<h3>SOME TITLE GOES HERE</h3>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
						<li>Floating Topic One</li>
						<li>Floating Topic Two</li>
						<li>Floating Topic Three</li>
					</ul>
				</div>
				<div className="chat-area">
					<ul>
						<h3>Lets Chat!!!</h3>
					</ul>
					<div className="chatbox">
						
					</div>
				</div>		
      </aside>
    );
  }
}

export default SideBar;
