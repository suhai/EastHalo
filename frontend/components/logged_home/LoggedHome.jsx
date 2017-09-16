import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import AdminPageContainer from '../admin/admin_page_container';
import BookstorePageContainer from '../bookstore/bookstore_page_container';
import CafetariaPageContainer from '../cafetaria/cafetaria_page_container';
import CoursePageContainer from '../course/course_page_container';
import NewsPageContainer from '../news/news_page_container';
import PrivateNavigation from './PrivateNavigation';
import ProfileDetailPageContainer from '../profile_detail/profile_detail_page_container';
import SearchContainer from '../search/search_container';
import SettingPageContainer from '../setting/setting_page_container';
import SideBarContainer from '../sidebar/sidebar_container';
import TranscriptPageContainer from '../transcript/transcript_page_container';
import UserPageContainer from '../user/user_page_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import CourseShowContainer from '../course/course_show_container';
import UserShow from '../user/UserShow';
import CourseFormContainer from '../course/course_form_container';
import MealFormContainer from '../cafetaria/meal_form_container';
import BookFormContainer from '../bookstore/book_form_container';
import CourseEditContainer from '../course/course_edit_container';
import DepartmentPageContainer from '../department/department_page_container';


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
						<Route path="/registrar/courseform" render={(props) => <CourseFormContainer {...props} />} />
						<Route path="/cafetaria/mealform" render={(props) => <MealFormContainer {...props} />} />
						<Route path="/bookstore/bookform" render={(props) => <BookFormContainer {...props} />} />
						<Route exact path="/admin/departments" render={(props) => <DepartmentPageContainer {...props} />} />
						<Route path="/admin" render={(props) => <AdminPageContainer {...props} />} />
						<Route path="/bookstore" render={(props) => <BookstorePageContainer {...props} />} />
						<Route path="/cafetaria" render={(props) => <CafetariaPageContainer {...props} />} />
						<Route path="/news" render={(props) => <NewsPageContainer {...props} />} />
						<Route exact path="/registrar" render={(props) => <CoursePageContainer {...props} />} />
						<Route path="/search" render={(props) => <SearchContainer {...props} />} />
						<Route exact path="/courses/edit/:id" render={(props) => <CourseEditContainer {...props} />} />
						<Route path="/:username/settings" render={(props) => <SettingPageContainer {...props} />} />
						<Route exact path="/:username/profile" render={(props) => <UserPageContainer {...props} />} />
						<Route path="/:username/edit" render={(props) => <UserEditFormContainer {...props} />} />
						<Route exact path="/:username" render={(props) => <UserShow {...props} />} />
						<Route path="/:username/page" render={(props) => <ProfileDetailPageContainer {...props} />} />
						<Route exact path="/courses/:id" render={(props) => <CourseShowContainer {...props} />} />
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