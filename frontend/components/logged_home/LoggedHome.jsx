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
import NewsPageContainer from '../news/news_page_container';
import HomeContainer from './home_container';
import CourseShowContainer from '../registrar/course_show_container';
import NewsShowContainer from '../news/news_show_container';
import MealShowContainer from '../cafetaria/meal_show_container';
import BookShowContainer from '../bookstore/book_show_container';


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
						<Route path="/:username/page" render={(props) => <ProfileDetailPageContainer {...props} />} />
						<Route exact path="/registrar" render={(props) => <RegistrarPageContainer {...props} />} />
						<Route path="/news" render={(props) => <NewsPageContainer {...props} />} />
						<Route path="/cafetaria" render={(props) => <CafetariaPageContainer {...props} />} />
						<Route path="/bookstore" render={(props) => <BookstorePageContainer {...props} />} />
						<Route path="/admin" render={(props) => <AdminPageContainer {...props} />} />
						<Route path="/search" render={(props) => <SearchContainer {...props} />} />
						<Route path="/:username/profile" render={(props) => <UserPageContainer {...props} />} />
						<Route exact path="/courses/:id" render={(props) => <CourseShowContainer {...props} />} />
						<Route exact path="/news/:id" render={(props) => <NewsShowContainer {...props} />} />
						<Route exact path="/cafetaria/meals/:id" render={(props) => <MealShowContainer {...props} />} />
						<Route exact path="/bookstore/books/:id" render={(props) => <BookShowContainer {...props} />} />
						{/* */}

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