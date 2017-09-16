import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
{/* BOOKS */}
import AdminBookPageContainer from './books/book_page_container';
import BookFormContainer from './books/book_form_container';
import BookEditContainer from './books/book_edit_container';
import BookShowContainer from './books/book_show_container';
{/* COMMENTS */}
import AdminCommentPageContainer from './comments/comment_page_container';
{/* COURSE_ENROLLMENTS */}
import AdminCourseEnrollmentPageContainer from './course_enrollments/course_enrollment_page_container';
{/* COURSES */}
import AdminCoursePageContainer from './courses/course_page_container';
{/* DEPARTMENTS */}
import AdminDepartmentPageContainer from './departments/department_page_container';
{/* FRIENDSHIPS */}
import AdminFriendshipPageContainer from './friendships/friendship_page_container';
{/* GRADE_LETTERS */}
import AdminGradeLetterPageContainer from './grade_letters/grade_letter_page_container';
{/* GRADES */}
import AdminGradePageContainer from './grades/grade_page_container';
{/* MEALS */}
import AdminMealPageContainer from './meals/meal_page_container';
{/* */}
import AdminPostPageContainer from './posts/post_page_container';
{/* SCHEDULES */}
import AdminSchedulePageContainer from './schedules/schedule_page_container';
{/* TRANSCRIPTS */}
import AdminTranscriptPageContainer from './transcripts/transcript_page_container';
{/* USERS */}
import AdminUserPageContainer from './users/user_page_container';
{/* */}



class Admin extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <main className='user-page'>
				<nav className='profile-nav'> {/* SUB NAVIGATIONS */}
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
					<Switch> {/* ROUTES */}
						<Route path="/admin/:username/users" render={(props) => <AdminUserPageContainer {...props} /> } />
						{/* BOOKS */}
						<Route path="/admin/:username/books" render={(props) => <AdminBookPageContainer {...props} /> } />
						<Route exact path="/admin/:username/books/bookform" render={(props) => <BookFormContainer {...props} /> } />
						<Route path="/admin/:username/books/edit/:id" render={(props) => <BookEditPageContainer {...props} /> } />
						<Route path="/bookstore/books/:id" render={(props) => <BookShowContainer {...props} /> } />
						{/* COMMENTS */}
						<Route path="/admin/:username/comments" render={(props) => <AdminCommentPageContainer {...props} /> } />
						{/* COURSE_ENROLLMENTS */}
						<Route path="/admin/:username/enrollments" render={(props) => <AdminCourseEnrollmentPageContainer {...props} /> } />
						{/* COURSES */}
						<Route path="/admin/:username/courses" render={(props) => <AdminCoursePageContainer {...props} /> } />
						{/* DEPARTMENTS */}
						<Route path="/admin/:username/departments" render={(props) => <AdminDepartmentPageContainer {...props} /> } />
						{/* FRIENDSHIPS */}
						<Route path="/admin/:username/friendships" render={(props) => <AdminFriendshipPageContainer {...props} /> } />
						{/* GRADE_LETTERS */}
						<Route path="/admin/:username/grade_letters" render={(props) => <AdminGradeLetterPageContainer {...props} /> } />
						{/* GRADES */}
						<Route path="/admin/:username/grades" render={(props) => <AdminGradePageContainer {...props} /> } />
						{/* MEALS */}
						<Route path="/admin/:username/meals" render={(props) => <AdminMealPageContainer {...props} /> } />
						{/* POSTS */}
						<Route path="/admin/:username/posts" render={(props) => <AdminPostPageContainer {...props} /> } />
						{/* SCHEDULES */}
						<Route path="/admin/:username/schedules" render={(props) => <AdminSchedulePageContainer {...props} /> } />
						{/* TRANSCRIPTS */}
						<Route path="/admin/:username/transcripts" render={(props) => <AdminTranscriptPageContainer {...props} /> } />
						{/* DEFAULT ADMIN PAGE */}
						<Route exact path="/admin" render={(props) => <AdminUserPageContainer {...props} /> } />
					</Switch>
				</div>
      </main>
    );
  }
}

export default Admin;