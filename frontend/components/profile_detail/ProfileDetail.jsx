import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import ProfilePageContainer from './profile/profile_page_container';
import AssignmentsPageContainer from './assignments/assignments_page_container';
import CommentsPageContainer from './comments/comments_page_container';
import FriendsPageContainer from './friends/friends_page_container';
import PostsPageContainer from './posts/posts_page_container';
import SchedulePageContainer from './schedule/schedule_page_container';
import TranscriptPageContainer from './transcript/transcript_page_container';


class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
				<nav className='profile-nav'>
					<ul>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/me`}>Profile</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/friends`}>My Friends</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/posts`}>My Posts</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/comments`}>My Comments</NavLink></li>	
						<li><NavLink to={`/${this.props.currentUser.username}/profile/schedule`}>My Schedule</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/assignments`}>My Assignments</NavLink></li>
						<li><NavLink to={`/${this.props.currentUser.username}/profile/transcript`}>My Transcript</NavLink></li>
					</ul>
				</nav>

				<div>
					<Switch>
						<Route exact path="/:username/profile" render={ (props) => <Redirect to="/:username/profile/me" /> } /> 
						{/* ASSIGNMENTS */}
						<Route path="/:username/profile/assignments" render={(props) => <AssignmentsPageContainer {...props} /> } />
						{/* COMMENTS */}
						<Route path="/:username/profile/comments" render={(props) => <CommentsPageContainer {...props} /> } />
						{/* FRIENDSS */}
						<Route path="/:username/profile/friends" render={(props) => <FriendsPageContainer {...props} /> } />
						{/* POSTS */}
						<Route path="/:username/profile/posts" render={(props) => <PostsPageContainer {...props} /> } />
						{/* SCHEDULE */}
						<Route path="/:username/profile/schedule" render={(props) => <SchedulePageContainer {...props} /> } />
						{/* TRANSCRIIPT */}
						<Route path="/:username/profile/transcript" render={(props) => <TranscriptPageContainer {...props} /> } />
						{/* MAIN PROFILE */}
						<Route path="/:username/profile/me" render={(props) => <ProfilePageContainer {...props} /> } />	
					</Switch>
				</div>
      </main>
    );
  }
}

export default ProfileDetail;