import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import AdminBookPageContainer from './books/book_page_container';
import AdminCommentPageContainer from './comments/comment_page_container';
import AdminCourseEnrollmentPageContainer from './course_enrollments/course_enrollment_page_container';
import AdminCoursePageContainer from './courses/course_page_container';
import AdminDepartmentPageContainer from './departments/department_page_container';
import AdminFriendshipPageContainer from './friendships/friendship_page_container';
import AdminGradePageContainer from './grades/grade_page_container';
import AdminGradeLetterPageContainer from './grade_letters/grade_letter_page_container';
import AdminMealPageContainer from './meals/meal_page_container';
import AdminPostPageContainer from './posts/post_page_container';
import AdminSchedulePageContainer from './schedules/schedule_page_container';
import AdminTranscriptPageContainer from './transcripts/transcript_page_container';
import AdminUserPageContainer from './users/user_page_container';


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
						<li><NavLink to={`/admin/${this.props.currentUser.username}/enrollments`}>Enrollments</NavLink></li>	
						<li><NavLink to={`/admin/${this.props.currentUser.username}/courses`}>Courses</NavLink></li>	
						<li><NavLink to={`/admin/${this.props.currentUser.username}/departments`}>Departments</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/friendships`}>Friendships</NavLink></li>	
						<li><NavLink to={`/admin/${this.props.currentUser.username}/grade_letters`}>GradeLetters</NavLink></li>	
						<li><NavLink to={`/admin/${this.props.currentUser.username}/grades`}>Grades</NavLink></li>	
						<li><NavLink to={`/admin/${this.props.currentUser.username}/meals`}>Meals</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/posts`}>Posts</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/schedules`}>Schedules</NavLink></li>
						<li><NavLink to={`/admin/${this.props.currentUser.username}/transcripts`}>Transcripts</NavLink></li>
					</ul>
				</nav>

				<div>
					<Switch>
						<Route path="/admin/:username/users" render={(props) => <AdminUserPageContainer {...props} /> } />
						<Route path="/admin/:username/books" render={(props) => <AdminBookPageContainer {...props} /> } />
						<Route path="/admin/:username/comments" render={(props) => <AdminCommentPageContainer {...props} /> } />
						<Route path="/admin/:username/enrollments" render={(props) => <AdminCourseEnrollmentPageContainer {...props} /> } />
						<Route path="/admin/:username/courses" render={(props) => <AdminCoursePageContainer {...props} /> } />
						<Route path="/admin/:username/departments" render={(props) => <AdminDepartmentPageContainer {...props} /> } />
						<Route path="/admin/:username/friendships" render={(props) => <AdminFriendshipPageContainer {...props} /> } />
						<Route path="/admin/:username/grade_letters" render={(props) => <AdminGradeLetterPageContainer {...props} /> } />
						<Route path="/admin/:username/grades" render={(props) => <AdminGradePageContainer {...props} /> } />
						<Route path="/admin/:username/meals" render={(props) => <AdminMealPageContainer {...props} /> } />
						<Route path="/admin/:username/posts" render={(props) => <AdminPostPageContainer {...props} /> } />
						<Route path="/admin/:username/schedules" render={(props) => <AdminSchedulePageContainer {...props} /> } />
						<Route path="/admin/:username/transcripts" render={(props) => <AdminTranscriptPageContainer {...props} /> } />
						<Route exact path="/admin" render={(props) => <AdminUserPageContainer {...props} /> } />
					</Switch>
				</div>
      </main>
    );
  }
}

export default Admin;