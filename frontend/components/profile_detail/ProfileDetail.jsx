import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import AccountPageContainer from './account/account_page_container';
import AssignmentPageContainer from './assignment/assignment_page_container';
import CommentPageContainer from './comment/comment_page_container';
import FriendPageContainer from './friend/friend_page_container';
import PostPageContainer from './post/post_page_container';
import SchedulePageContainer from './schedule/schedule_page_container';
import TranscriptPageContainer from './transcript/transcript_page_container';
import MyClassPageContainer from './classz/class_page_container';


class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
				<nav className='profile-nav'>
					<ul>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/account`}>Account</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/classes`}>Classes</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/friends`}>Friends</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/posts`}>Posts</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/comments`}>Comments</NavLink></li>	
						<li><NavLink to={`/${this.props.currentUser.username}/profile/schedule`}>Schedule</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/assignments`}>Assignments</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/transcript`}>Transcript</NavLink></li>
					</ul>
				</nav>

				<div>
					<Switch>
						<Route path="/:username/profile/account" render={(props) => <AccountPageContainer {...props} /> } />
						<Route path="/:username/profile/classes" render={(props) => <MyClassPageContainer {...props} /> } />
						<Route path="/:username/profile/assignments" render={(props) => <AssignmentPageContainer {...props} /> } />
						<Route path="/:username/profile/comments" render={(props) => <CommentPageContainer {...props} /> } />
						<Route path="/:username/profile/friends" render={(props) => <FriendPageContainer {...props} /> } />
						<Route path="/:username/profile/posts" render={(props) => <PostPageContainer {...props} /> } />
						<Route path="/:username/profile/schedule" render={(props) => <SchedulePageContainer {...props} /> } />
						<Route path="/:username/profile/transcript" render={(props) => <TranscriptPageContainer {...props} /> } />
						<Route exact path="/:username/profile" render={(props) => <AccountPageContainer {...props} /> } />
					</Switch>
				</div>
      </main>
    );
  }
}

export default ProfileDetail;