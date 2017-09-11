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


class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
				<nav className='profile-nav'>
					<ul>
						<li><NavLink to={`/${this.props.currentUser.username}/page/account`}>Account</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/page/friends`}>Friends</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/page/posts`}>Posts</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/page/comments`}>Comments</NavLink></li>	
						<li><NavLink to={`/${this.props.currentUser.username}/page/schedule`}>Schedule</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/page/assignments`}>Assignments</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/page/transcript`}>Transcript</NavLink></li>
					</ul>
				</nav>

				<div>
					<Switch>
						<Route path="/:username/page/account" render={(props) => <AccountPageContainer {...props} /> } />
						<Route path="/:username/page/assignments" render={(props) => <AssignmentPageContainer {...props} /> } />
						<Route path="/:username/page/comments" render={(props) => <CommentPageContainer {...props} /> } />
						<Route path="/:username/page/friends" render={(props) => <FriendPageContainer {...props} /> } />
						<Route path="/:username/page/posts" render={(props) => <PostPageContainer {...props} /> } />
						<Route path="/:username/page/schedule" render={(props) => <SchedulePageContainer {...props} /> } />
						<Route path="/:username/page/transcript" render={(props) => <TranscriptPageContainer {...props} /> } />
						<Route exact path="/:username/page" render={(props) => <AccountPageContainer {...props} /> } />
					</Switch>
				</div>
      </main>
    );
  }
}

export default ProfileDetail;