import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PrivateNavigation from './PrivateNavigation';
import ProfileDetailPageContainer from '../profile_detail/profile_detail_page_container';
import AdminPageContainer from '../admin/admin_page_container';
import BookstorePageContainer from '../bookstore/bookstore_page_container';
import CafetariaPageContainer from '../cafetaria/cafetaria_page_container';
import RegistrarPageContainer from '../registrar/registrar_page_container';
import SearchContainer from '../search/search_container';
import SideBarContainer from '../sidebar/sidebar_container';
import HomeContainer from './home_container';
import CourseShowContainer from '../registrar/course_show_container';
import MealShowContainer from '../cafetaria/meal_show_container';
import BookShowContainer from '../bookstore/book_show_container';
import NewsPageContainer from '../news/news_page_container';


{/* COMMENTS , only display all + delete options */}
import CommentShowContainer from '../comments/comment_show_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentEditContainer from '../comments/comment_edit_container';
{/* POSTS */}
import PostShowContainer from '../posts/post_show_container';
import PostFormContainer from '../posts/post_form_container';
import PostEditContainer from '../posts/post_edit_container';
{/* USERS */}
import UserShowContainer from '../users/user_show_container';
// import UserPageContainer from '../user/user_page_container';
// import UserEditFormContainer from '../user/user_edit_form_container';
// import UserShow from '../user/UserShow';
// import CourseFormContainer from '../course/course_form_container';
// import MealFormContainer from '../cafetaria/meal_form_container';
// import BookFormContainer from '../bookstore/book_form_container';
// import CourseEditContainer from '../course/course_edit_container';
// import TranscriptPageContainer from '../transcript/transcript_page_container';
// import DepartmentPageContainer from '../department/department_page_container';
// import SettingPageContainer from '../setting/setting_page_container';


class LoggedHome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='loggedhome'>
				<PrivateNavigation logout={this.props.logout} currentUser={this.props.currentUser} />
				<div className='placeholder-text2'>
					<h3>WELCOME TO THE LOGGED HOMEPAGE</h3>
					<Switch>
						<Route path="/subhome" render={(props) => <HomeContainer {...props} />} />
						<Route path="/:username/profile" render={(props) => <ProfileDetailPageContainer {...props} />} />
						<Route path="/registrar/courses/:id" render={(props) => <CourseShowContainer {...props} />} />
						<Route path="/registrar" render={(props) => <RegistrarPageContainer {...props} />} />
						<Route path="/cafetaria/meals/:id" render={(props) => <MealShowContainer {...props} />} />
						<Route path="/cafetaria" render={(props) => <CafetariaPageContainer {...props} />} />
						<Route path="/bookstore/books/:id" render={(props) => <BookShowContainer {...props} />} />
						<Route path="/bookstore" render={(props) => <BookstorePageContainer {...props} />} />
						<Route path="/admin" render={(props) => <AdminPageContainer {...props} />} />
						<Route path="/news" render={(props) => <NewsPageContainer {...props} />} />
						<Route path="/search" render={(props) => <SearchContainer {...props} />} />
						{/* <Route path="/:username/profile" render={(props) => <UserPageContainer {...props} />} /> */}


						{/* COMMENTS */}
						<Route path="/:username/comments/commentform" render={(props) => <CommentFormContainer {...props} /> } />
						<Route path="/:username/comments/edit/:id" render={(props) => <CommentEditContainer {...props} /> } />
						<Route path="/:username/comments/:id" render={(props) => <CommentShowContainer {...props} /> } />
						{/* FRIENDSS */}
						<Route path="/:username/users/:id" render={(props) => <UserShowContainer {...props} /> } />
						{/* POSTS */}
						<Route path="/:username/posts/postform" render={(props) => <PostFormContainer {...props} /> } />
						<Route path="/:username/posts/edit/:id" render={(props) => <PostEditContainer {...props} /> } />
						<Route path="/:username/posts/:id" render={(props) => <PostShowContainer {...props} /> } />
						{/* <Route path="/registrar/courseform" render={(props) => <CourseFormContainer {...props} />} />
						<Route exact path="/courses/edit/:id" render={(props) => <CourseEditContainer {...props} />} />
						<Route path="/:username/settings" render={(props) => <SettingPageContainer {...props} />} />
						<Route path="/:username/edit" render={(props) => <UserEditFormContainer {...props} />} />
						<Route exact path="/:username" render={(props) => <UserShow {...props} />} />
						<Route path="/cafetaria/mealform" render={(props) => <MealFormContainer {...props} />} />
						<Route path="/bookstore/bookform" render={(props) => <BookFormContainer {...props} />} />
						<Route exact path="/admin/departments" render={(props) => <DepartmentPageContainer {...props} />} /> */}
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