import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
{/* ASSIGNMENTS, only display all + delete options */}
import AdminAssignmentPageContainer from './assignments/assignment_page_container';
{/* BOOKS */}
import AdminBookPageContainer from './books/book_page_container';
import AdminBookFormContainer from './books/book_form_container';
import AdminBookEditContainer from './books/book_edit_container';
// import AdminBookShowContainer from './books/book_show_container';
{/* COMMENTS , only display all + delete options */}
import AdminCommentPageContainer from './comments/comment_page_container';
{/* COURSE_ENROLLMENTS , only display all + delete options */}
import AdminCourseEnrollmentPageContainer from './course_enrollments/course_enrollment_page_container';
{/* COURSES */}
import AdminCoursePageContainer from './courses/course_page_container';
import AdminCourseFormContainer from './courses/course_form_container';
import AdminCourseEditContainer from './courses/course_edit_container';
{/* DEPARTMENTS , only display all + delete options */}
import AdminDepartmentPageContainer from './departments/department_page_container';
{/* FRIENDSHIPS , only display all + delete options */}
import AdminFriendshipPageContainer from './friendships/friendship_page_container';
{/* GRADE_LETTERS , only display all + delete options */}
import AdminGradeLetterPageContainer from './grade_letters/grade_letter_page_container';
{/* GRADES , only display all + delete options */}
import AdminGradePageContainer from './grades/grade_page_container';
{/* MEALS */}
import AdminMealsPageContainer from './meals/meal_page_container';
import AdminMealFormContainer from './meals/meal_form_container';
import AdminMealEditContainer from './meals/meal_edit_container';
{/* NEWS */}
import AdminNewsPageContainer from './news/news_page_container';
{/* POSTS */}
import AdminPostPageContainer from './posts/post_page_container';
{/* SCHEDULES , only display all + delete options */}
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
						<li><NavLink to={`/admin/${this.props.currentUser.username}/assignments`}>Assignments</NavLink></li>
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
						<li><NavLink to={`/admin/${this.props.currentUser.username}/news`}>News</NavLink></li>
					</ul>
				</nav>

				<div>
					<Switch> {/* ROUTES */}
						{/* ASSIGNMENTS */}
						<Route path="/admin/:username/assignments" render={(props) => <AdminAssignmentPageContainer {...props} /> } />
						{/* USERS */}
						<Route path="/admin/:username/users" render={(props) => <AdminUserPageContainer {...props} /> } />
						{/* BOOKS */}
						{/* <Route path="/bookstore/books/:id" render={(props) => <AdminBookShowContainer {...props} /> } /> */}
						<Route path="/admin/:username/books/bookform" render={(props) => <AdminBookFormContainer {...props} /> } />
						<Route path="/admin/:username/books/edit/:id" render={(props) => <AdminBookEditContainer {...props} /> } />
						<Route path="/admin/:username/books" render={(props) => <AdminBookPageContainer {...props} /> } />
						{/* COMMENTS */}
						<Route path="/admin/:username/comments" render={(props) => <AdminCommentPageContainer {...props} /> } />
						{/* COURSE_ENROLLMENTS */}
						<Route path="/admin/:username/enrollments" render={(props) => <AdminCourseEnrollmentPageContainer {...props} /> } />
						{/* COURSES */}
						<Route path="/admin/:username/courses/courseform" render={(props) => <AdminCourseFormContainer {...props} /> } />
						<Route path="/admin/:username/courses/edit/:id" render={(props) => <AdminCourseEditContainer {...props} /> } />
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
						<Route path="/admin/:username/meals/edit/:id" render={(props) => <AdminMealEditContainer {...props} /> } />
						{/* <Route path="/cafetaria/meals/:id" render={(props) => <AdminMealShowContainer {...props} /> } /> */}
						<Route path="/admin/:username/meals/mealform" render={(props) => <AdminMealFormContainer {...props} /> } />
						<Route path="/admin/:username/meals/edit/:id" render={(props) => <AdminMealEditContainer {...props} /> } />
						<Route path="/admin/:username/meals" render={(props) => <AdminMealsPageContainer {...props} /> } />

						{/* NEWS */}
						<Route path="/admin/:username/news" render={(props) => <AdminNewsPageContainer {...props} /> } />
						{/* POSTS */}
						<Route path="/admin/:username/posts" render={(props) => <AdminPostPageContainer {...props} /> } />
						{/* SCHEDULES */}
						<Route path="/admin/:username/schedules" render={(props) => <AdminSchedulePageContainer {...props} /> } />
						{/* TRANSCRIPTS */}
						<Route path="/admin/:username/transcripts" render={(props) => <AdminTranscriptPageContainer {...props} /> } />
						{/* USERS */}

						{/* DEFAULT ADMIN PAGE */}
						<Route exact path="/admin" render={(props) => <AdminUserPageContainer {...props} /> } />
					</Switch>
				</div>
      </main>
    );
  }
}

export default Admin;