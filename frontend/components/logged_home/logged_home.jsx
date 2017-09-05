import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PrivateNavigation from './private_navigation';
import UserHome from '../user/user_home';
import UserPageContainer from '../user/user_page_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import SearchContainer from '../search/search_container';


class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loggedhome'>
        <PrivateNavigation logout={this.props.logout} currentUser={this.props.currentUser}/>

        <div className='placeholder-text'>
					<h3>WELCOME TO THE LOGGED HOMEPAGE</h3>
				</div>

				<Switch>
          <Route exact path="/users" render={(props) => <UserHome {...props} /> } />
          <Route path="/search" render={(props) => <SearchContainer {...props} /> } />
          <Route path="/:username/edit" render={(props) => <UserEditFormContainer {...props} /> } />
          <Route path="/:username" render={(props) => <UserPageContainer {...props} /> } />
        </Switch>

      </div>
    );
  }
}

export default LoggedHome;