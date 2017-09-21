import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PrivateNavigation from './PrivateNavigation';
import ProfileDetailPageContainer from '../profile_detail/profile_detail_page_container';
import AdminPageContainer from '../admin/admin_page_container';
import BookShowContainer from '../bookstore/book_show_container';
import BookstorePageContainer from '../bookstore/bookstore_page_container';
import CafetariaPageContainer from '../cafetaria/cafetaria_page_container';
{/* COMMENTS , only display all + delete options */}
import CommentShowContainer from '../comments/comment_show_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentEditContainer from '../comments/comment_edit_container';
import CourseShowContainer from '../registrar/course_show_container';
{/* HOME */}
import SubHomeContainer from './sub_home_container';
{/* MEALS */}
import MealShowContainer from '../cafetaria/meal_show_container';
{/* NEWS */}
import NewsPageContainer from '../news/news_page_container';
{/* POSTS */}
import PostShowContainer from '../posts/post_show_container';
import PostFormContainer from '../posts/post_form_container';
import PostEditContainer from '../posts/post_edit_container';
import RegistrarPageContainer from '../registrar/registrar_page_container';
import SearchContainer from '../search/search_container';
import SideBarContainer from '../sidebar/sidebar_container';
{/* USERS */}
import UserShowContainer from '../users/user_show_container';


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
						{/* ADMIN AREA */}
						<Route path="/admin" render={(props) => <AdminPageContainer {...props} />} />
						{/* COMMUNITY AREA */}
						<Route path="/subhome" render={(props) => <SubHomeContainer {...props} />} />
						{/* BOOKSTORE */}
						<Route path="/bookstore/books/:id" render={(props) => <BookShowContainer {...props} />} />
						<Route path="/bookstore" render={(props) => <BookstorePageContainer {...props} />} />
						{/* CAFETARIA */}
						<Route path="/cafetaria/meals/:id" render={(props) => <MealShowContainer {...props} />} />
						<Route path="/cafetaria" render={(props) => <CafetariaPageContainer {...props} />} />
						{/* COMMENTS */}
						<Route path="/:username/comments/commentform" render={(props) => <CommentFormContainer {...props} /> } />
						<Route path="/:username/comments/edit/:id" render={(props) => <CommentEditContainer {...props} /> } />
						<Route path="/:username/comments/:id" render={(props) => <CommentShowContainer {...props} /> } />
						{/* FRIENDSS */}
						<Route path="/:username/users/:id" render={(props) => <UserShowContainer {...props} /> } />
						<Route exact path="/users/:id" render={(props) => <UserShowContainer {...props} /> } />
						{/* NEWS PAGE */}
						<Route path="/news" render={(props) => <NewsPageContainer {...props} />} />
						{/* POSTS */}
						<Route path="/:username/posts/postform" render={(props) => <PostFormContainer {...props} /> } />
						<Route path="/:username/posts/edit/:id" render={(props) => <PostEditContainer {...props} /> } />
						<Route path="/:username/posts/:id" render={(props) => <PostShowContainer {...props} /> } />
						<Route exact path="/posts/:id" render={(props) => <PostShowContainer {...props} /> } />
						{/* PROFILE */}
						<Route path="/:username/profile" render={(props) => <ProfileDetailPageContainer {...props} />} />
						{/* REGISTRAR / COURSES */}
						<Route path="/registrar/courses/:id" render={(props) => <CourseShowContainer {...props} />} />
						<Route path="/registrar" render={(props) => <RegistrarPageContainer {...props} />} />
						{/* SEARCH */}
						<Route path="/search" render={(props) => <SearchContainer {...props} />} />
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