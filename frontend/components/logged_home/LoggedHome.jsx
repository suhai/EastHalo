import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PrivateNavigation from './PrivateNavigation';
import SideBarContainer from '../sidebar/sidebar_container';
import UserPageContainer from '../user/user_page_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import SearchContainer from '../search/search_container';
import BookstorePageContainer from '../bookstore/bookstore_page_container';
import CoursePageContainer from '../course/course_page_container';
import SchedulePageContainer from '../schedule/schedule_page_container';
import FriendPageContainer from '../friend/friend_page_container';
import PostPageContainer from '../post/post_page_container';
import CafetariaPageContainer from '../cafetaria/cafetaria_page_container';
import TranscriptPageContainer from '../transcript/transcript_page_container';


class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loggedhome'>
        <PrivateNavigation logout={this.props.logout} currentUser={this.props.currentUser}/>
        <div className='placeholder-text2'>
					<h3>WELCOME TO THE LOGGED HOMEPAGE</h3>
					<Switch>
						<Route path="/search" render={(props) => <SearchContainer {...props} /> } />
						<Route path="/bookstore" render={(props) => <BookstorePageContainer {...props} /> } />
						<Route path="/registrar" render={(props) => <CoursePageContainer {...props} /> } />
						<Route path="/schedule" render={(props) => <SchedulePageContainer {...props} /> } />
						<Route path="/amigos" render={(props) => <FriendPageContainer {...props} /> } />
						<Route path="/postz" render={(props) => <PostPageContainer {...props} /> } />
						<Route path="/cafetaria" render={(props) => <CafetariaPageContainer {...props} /> } />
						<Route path="/transcript" render={(props) => <TranscriptPageContainer {...props} /> } />
						<Route path="/:username/edit" render={(props) => <UserEditFormContainer {...props} /> } />
						<Route path="/:username" render={(props) => <UserPageContainer {...props} /> } />
					</Switch>
				</div>
				<div className='sidebar-div'>
					<SideBarContainer />
				</div>		
      </div>
    );
  }
}

export default LoggedHome;