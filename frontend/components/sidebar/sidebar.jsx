import React from 'react';
// import SidebarPostContainer from './sidebar_post_container';
// import SidebarUserContainer from './sidebar_user_container';
// import SidebarNewsContainer from './sidebar_news_container';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0, userIds: [], songIds: [] };
  }

  componentDidMount() {
    // let sidebar = this;
    // this.props.fetchRandomUsers({ query: this.props.currentUser.id })
    //   .then((action) => sidebar.setState({ userIds: Object.keys(action.users) }));
    // this.props.fetchRandomSongs({ query: this.state.offset })
    //   .then((action) => sidebar.setState({ songIds: Object.keys(action.songs) }));
  }

  chartBox() {
    return (
      <div className='chart-box'>
        <div className="author">
          <figure className="github">
            <a href="#"></a>
            <a className="page" href="#">Github</a>
          </figure>
          <figure className="linkedin">
            <a href="#"></a>
            <a className="page" href="#">Linkedin</a>
          </figure>
        </div>
      </div>
    );
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
        <li className='artist-suggestion'>
          <span className='follow'>Who to follow</span>
          <ul>
            {users}
          </ul>
        </li>
				
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
