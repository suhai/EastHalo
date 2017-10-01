import React from 'react';
// import SidebarPostContainer from './sidebar_post_container';
import SidebarUserContainer from './sidebar_user_container';
// import SidebarNewsContainer from './sidebar_news_container';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0, userIds: [] };
  }

  componentDidMount() {
    let sidebar = this;
    this.props.fetchRandomUsers({ query: this.props.currentUser.id })
      .then((action) => sidebar.setState({ userIds: Object.keys(action.users) }));
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
    let id = this.props.match.params.id;
    for (let key in users) {
      if (users[key].id === id) {
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
				<h6 className='sidebar-header'>CHECK OUT OTHER USERS</h6>
        <li className=''>
          <ul>
            {users}
          </ul>
        </li>
				
				<div className="chat-area">
					<ul>
						<h3>Chat Area To Be Implemented!!!</h3>
					</ul>
					<div className="">
						
					</div>
				</div>
      </aside>
    );
  }
}

export default SideBar;
