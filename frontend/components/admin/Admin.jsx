import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import AccountPageContainer from '../account/account_page_container';
import AssignmentPageContainer from '../assignment/assignment_page_container';
import CommentPageContainer from '../comment/comment_page_container';
import FriendPageContainer from '../friend/friend_page_container';
import PostPageContainer from '../post/post_page_container';
import SchedulePageContainer from '../schedule/schedule_page_container';
import TranscriptPageContainer from '../transcript/transcript_page_container';


class Admin extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
				<nav className='profile-nav'>
					<ul>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/users`}>Users</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/books`}>Books</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/comments`}>Comments</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/courses`}>Courses</NavLink></li>	
						<li><NavLink to={`/admin/${this.props.currentUser.username}/departments`}>Departments</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/meals`}>Meals</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/posts`}>Posts</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/schedules`}>Schedules</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/transcripts`}>Transcripts</NavLink></li>
					</ul>
				</nav>

				<div>
					<Switch>
						<Route path="/admin/:username/users" render={(props) => <AccountPageContainer {...props} /> } />
						<Route path="/admin/:username/books" render={(props) => <AssignmentPageContainer {...props} /> } />
						<Route path="/admin/:username/comments" render={(props) => <CommentPageContainer {...props} /> } />
						<Route path="/admin/:username/courses" render={(props) => <FriendPageContainer {...props} /> } />
						<Route path="/admin/:username/departments" render={(props) => <CommentPageContainer {...props} /> } />
						<Route path="/admin/:username/meals" render={(props) => <SchedulePageContainer {...props} /> } />
						<Route path="/admin/:username/posts" render={(props) => <PostPageContainer {...props} /> } />
						<Route path="/admin/:username/schedules" render={(props) => <SchedulePageContainer {...props} /> } />
						<Route path="/admin/:username/transcripts" render={(props) => <TranscriptPageContainer {...props} /> } />
						<Route exact path="/admin" render={(props) => <AccountPageContainer {...props} /> } />
					</Switch>
				</div>
      </main>
    );
  }
}

export default Admin;