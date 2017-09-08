import React from 'react';
import SidebarUserContainer from './sidebar_user_container';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0, userIds: [], songIds: [] };
  }

  componentDidMount() {
    let sidebar = this;
    this.props.fetchRandomUsers({ query: this.props.currentUser.id })
      .then((action) => sidebar.setState({ userIds: Object.keys(action.users) }));
  }


  userDescription() {
    let users = this.props.users;
    let user = {};
    let name = this.props.match.params.username;
    for (let key in users) {
      if (users[key].username === name) {
        user = users[key];
      }
    }
    if (user.description === undefined) {
      return <div className='user-description'></div>;
    }
    let description = user.description.split("\n").map( (item,idx) => (
      <p key={idx}>
        {item}
        <br />
      </p>
    ));
    return (
      <div className='user-description'>
        {description}
      </div>
    );
  }

  render() {
    let users = [];
    this.state.userIds.forEach( id => {
      users.push(this.props.users[id]);
    });

    users = users.map( user => (
      <SidebarUserContainer user={user} key={user.id} />
    ));

    return (
      <aside className='loggedhome-sidebar'>
        <Switch>
          <Route exact path='/stream' component={() => this.chartBox()} />
          <Route exact path='/:username' component={() => this.userDescription()} />
          <Route exact path='/:username/:whatever' component={() => this.userDescription()} />
        </Switch>

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
