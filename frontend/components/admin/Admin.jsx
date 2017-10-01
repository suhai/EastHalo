import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import PrivateNavigation from '../logged_home/PrivateNavigation';
{/* ASSIGNMENTS, only display all + delete options */}
import AdminAssignmentPageContainer from './assignments/assignment_page_container';
{/* BOOKS */}
import AdminBookPageContainer from './books/book_page_container';
import AdminBookShowContainer from './books/book_show_container';
import AdminBookFormContainer from './books/book_form_container';
import AdminBookEditContainer from './books/book_edit_container';
// import AdminBookShowContainer from './books/book_show_container';
{/* COMMENTS , only display all + delete options */}
import AdminCommentPageContainer from './comments/comment_page_container';
import AdminCommentShowContainer from './comments/comment_show_container';
import AdminCommentFormContainer from './comments/comment_form_container';
import AdminCommentEditContainer from './comments/comment_edit_container';
{/* COURSE_ENROLLMENTS , only display all + delete options */}
import AdminCourseEnrollmentPageContainer from './course_enrollments/course_enrollment_page_container';
{/* COURSES */}
import AdminCoursePageContainer from './courses/course_page_container';
import AdminCourseFormContainer from './courses/course_form_container';
import AdminCourseEditContainer from './courses/course_edit_container';
import AdminCourseShowContainer from './courses/course_show_container';
{/* DEPARTMENTS , only display all + delete options */}
import AdminDepartmentPageContainer from './departments/department_page_container';
import AdminDepartmentFormContainer from './departments/department_form_container';
import AdminDepartmentEditContainer from './departments/department_edit_container';
{/* FRIENDSHIPS , only display all + delete options */}
import AdminFriendshipPageContainer from './friendships/friendship_page_container';
{/* GRADE_LETTERS , only display all + delete options */}
import AdminGradeLetterPageContainer from './grade_letters/grade_letter_page_container';
import AdminGradeLetterFormContainer from './grade_letters/grade_letter_form_container';
import AdminGradeLetterEditContainer from './grade_letters/grade_letter_edit_container';
{/* GRADES, have to decide if grades should be editable */}
import AdminGradePageContainer from './grades/grade_page_container';
import AdminGradeShowContainer from './grades/grade_show_container';
import AdminGradeFormContainer from './grades/grade_form_container';
import AdminGradeEditContainer from './grades/grade_edit_container';
{/* MEALS */}
import AdminMealPageContainer from './meals/meal_page_container';
import AdminMealShowContainer from './meals/meal_show_container';
import AdminMealFormContainer from './meals/meal_form_container';
import AdminMealEditContainer from './meals/meal_edit_container';
{/* MESSAGES */}
import AdminMessagePageContainer from './messages/message_page_container';
import AdminMessageShowContainer from './messages/message_show_container';
{/* NEWS */}
import AdminNewsPageContainer from './news/news_page_container';
import AdminNewsFormContainer from './news/news_form_container';
import AdminNewsEditContainer from './news/news_edit_container';
{/* POSTS */}
import AdminPostPageContainer from './posts/post_page_container';
import AdminPostShowContainer from './posts/post_show_container';
import AdminPostFormContainer from './posts/post_form_container';
import AdminPostEditContainer from './posts/post_edit_container';
{/* SCHEDULES , only display all + delete options */}
import AdminSchedulePageContainer from './schedules/schedule_page_container';
import AdminScheduleShowContainer from './schedules/schedule_show_container';
{/* TRANSCRIPTS */}
import AdminTranscriptPageContainer from './transcripts/transcript_page_container';
import AdminTranscriptShowContainer from './transcripts/transcript_show_container';
{/* USERS */}
import AdminUserPageContainer from './users/user_page_container';
import AdminUserShowContainer from './users/user_show_container';
import AdminUserEditContainer from './users/user_edit_container';
import SideBarContainer from '../sidebar/sidebar_container';


class Admin extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {

    return (
			<div className='loggedhome'>
				<PrivateNavigation logout={this.props.logout} currentUser={this.props.currentUser} />
				<main className='user-page'>
					<nav className='profile-nav'> 
						{/* <div className='admin-nav-bar'> */}
							<ul>
								<li className="dropdown">
									<a href="javascript:void(0)" className="dropbtn">Grades & Transcripts</a>
									<div className="dropdown-content">
										<NavLink to={`/admin/${this.props.currentUser.username}/grade_letters`}>GradeLetters</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/grades`}>Grades</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/transcripts`}>Transcripts</NavLink>
									</div>
								</li>
								<li className="dropdown">
									<a href="javascript:void(0)" className="dropbtn">Enrollements</a>
									<div className="dropdown-content">
										<NavLink to={`/admin/${this.props.currentUser.username}/departments`}>Departments</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/courses`}>Courses</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/enrollments`}>Enrollemnts</NavLink>
									</div>
								</li>
								<li className="dropdown">
									<a href="javascript:void(0)" className="dropbtn">Student Info</a>
									<div className="dropdown-content">
										<NavLink to={`/admin/${this.props.currentUser.username}/users`}>Users</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/schedules`}>Schedules</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/assignments`}>Assignments</NavLink>
									</div>
								</li>
								<li className="dropdown">
									<a href="javascript:void(0)" className="dropbtn">Posts & Comments</a>
									<div className="dropdown-content">
										<NavLink to={`/admin/${this.props.currentUser.username}/posts`}>Posts</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/comments`}>Comments</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/friendships`}>Friendships</NavLink>
									</div>
								</li>
								<li className="dropdown">
									<a href="javascript:void(0)" className="dropbtn">Shopping</a>
									<div className="dropdown-content">
										<NavLink to={`/admin/${this.props.currentUser.username}/books`}>Books</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/meals`}>Food</NavLink>
									</div>
								</li>
								<li className="dropdown">
									<a href="javascript:void(0)" className="dropbtn">Messages</a>
									<div className="dropdown-content">
										<NavLink to={`/admin/${this.props.currentUser.username}/news`}>News</NavLink>
										<NavLink to={`/admin/${this.props.currentUser.username}/messages`}>Messages</NavLink>
									</div>
								</li>
							</ul>
						{/* </div> */}
					</nav>

					<div>
						<Switch> {/* ROUTES */}
							{/* ASSIGNMENTS */}
							<Route path="/admin/:username/assignments" render={(props) => <AdminAssignmentPageContainer {...props} /> } />
							{/* BOOKS */}
							<Route path="/admin/:username/books/bookform" render={(props) => <AdminBookFormContainer {...props} /> } />
							<Route path="/admin/:username/books/edit/:id" render={(props) => <AdminBookEditContainer {...props} /> } />
							<Route path="/admin/:username/books/:id" render={(props) => <AdminBookShowContainer {...props} /> } />
							<Route path="/admin/:username/books" render={(props) => <AdminBookPageContainer {...props} /> } />
							{/* COMMENTS */}
							<Route path="/admin/:username/posts/:id/comments/commentform" render={(props) => <AdminCommentFormContainer {...props} /> } />
							<Route path="/admin/:username/comments/edit/:id" render={(props) => <AdminCommentEditContainer {...props} /> } />
							<Route path="/:username/comments/:id" render={(props) => <AdminCommentShowContainer {...props} /> } />
							<Route path="/admin/:username/comments" render={(props) => <AdminCommentPageContainer {...props} /> } />
							{/* COURSE_ENROLLMENTS ; Only Show (and may be delete) */}
							<Route path="/admin/:username/enrollments" render={(props) => <AdminCourseEnrollmentPageContainer {...props} /> } />
							{/* COURSES */}
							<Route path="/admin/:username/courses/courseform" render={(props) => <AdminCourseFormContainer {...props} /> } />
							<Route path="/admin/:username/courses/edit/:id" render={(props) => <AdminCourseEditContainer {...props} /> } />
							<Route path="/admin/:username/courses/:id" render={(props) => <AdminCourseShowContainer {...props} /> } />
							<Route path="/admin/:username/courses" render={(props) => <AdminCoursePageContainer {...props} /> } />
							{/* DEPARTMENTS */}
							<Route path="/admin/:username/departments/departmentform" render={(props) => <AdminDepartmentFormContainer {...props} /> } />
							<Route path="/admin/:username/departments/edit/:id" render={(props) => <AdminDepartmentEditContainer {...props} /> } />
							<Route path="/admin/:username/departments" render={(props) => <AdminDepartmentPageContainer {...props} /> } />
							{/* FRIENDSHIPS */}
							<Route path="/admin/:username/friendships" render={(props) => <AdminFriendshipPageContainer {...props} /> } />
							{/* GRADE_LETTERS */}
							<Route path="/admin/:username/grade_letters/grade_letterform" render={(props) => <AdminGradeLetterFormContainer {...props} /> } />
							<Route path="/admin/:username/grade_letters/edit/:id" render={(props) => <AdminGradeLetterEditContainer {...props} /> } />
							<Route path="/admin/:username/grade_letters" render={(props) => <AdminGradeLetterPageContainer {...props} /> } />
							{/* GRADES */}
							<Route path="/admin/:username/grades/gradeform" render={(props) => <AdminGradeFormContainer {...props} /> } />
							<Route path="/admin/:username/grades/edit/:id" render={(props) => <AdminGradeEditContainer {...props} /> } />
							<Route path="/admin/:username/grades/:id" render={(props) => <AdminGradeShowContainer {...props} /> } />
							<Route path="/admin/:username/grades" render={(props) => <AdminGradePageContainer {...props} /> } />
							{/* MEALS */}
							<Route path="/admin/:username/meals/edit/:id" render={(props) => <AdminMealEditContainer {...props} /> } />
							<Route path="/admin/:username/meals/mealform" render={(props) => <AdminMealFormContainer {...props} /> } />
							<Route path="/admin/:username/meals/:id" render={(props) => <AdminMealShowContainer {...props} /> } />
							<Route path="/admin/:username/meals" render={(props) => <AdminMealPageContainer {...props} /> } />
							{/* MESSAGES */}
							<Route path="/admin/:username/messages/:id" render={(props) => <AdminMessageShowContainer {...props} /> } />
							<Route path="/admin/:username/messages" render={(props) => <AdminMessagePageContainer {...props} /> } />
							{/* NEWS */}
							<Route path="/admin/:username/news/newsform" render={(props) => <AdminNewsFormContainer {...props} /> } />
							<Route path="/admin/:username/news/edit/:id" render={(props) => <AdminNewsEditContainer {...props} /> } />
							<Route path="/admin/:username/news" render={(props) => <AdminNewsPageContainer {...props} /> } />
							{/* POSTS */}
							<Route path="/admin/:username/posts/postform" render={(props) => <AdminPostFormContainer {...props} /> } />
							<Route path="/admin/:username/posts/edit/:id" render={(props) => <AdminPostEditContainer {...props} /> } />
							<Route path="/admin/:username/posts/:id" render={(props) => <AdminPostShowContainer {...props} /> } />
							<Route path="/admin/:username/posts" render={(props) => <AdminPostPageContainer {...props} /> } />
							{/* SCHEDULES */}
							<Route path="/admin/:username/schedules/:id" render={(props) => <AdminScheduleShowContainer {...props} /> } />
							<Route path="/admin/:username/schedules" render={(props) => <AdminSchedulePageContainer {...props} /> } />
							{/* TRANSCRIPTS */}
							<Route path="/admin/:username/transcripts/:id" render={(props) => <AdminTranscriptShowContainer {...props} /> } />
							<Route path="/admin/:username/transcripts" render={(props) => <AdminTranscriptPageContainer {...props} /> } />
							{/* USERS */}
							<Route path="/admin/:username/users/edit/:id" render={(props) => <AdminUserEditContainer {...props} /> } />
							<Route path="/admin/:username/users/:id" render={(props) => <AdminUserShowContainer {...props} /> } />
							<Route path="/admin/:username/users" render={(props) => <AdminUserPageContainer {...props} /> } />

							{/* DEFAULT ADMIN PAGE */}
							<Route exact path="/admin" render={(props) => <AdminUserPageContainer {...props} /> } />
						</Switch>
					</div>
				</main>
				<div className='sidebar-div'>
					<SideBarContainer />
				</div>
			</div>
    );
  }
}

export default Admin;