import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HighlyProtectedRoute } from '../utils/route_utils';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';
import AdminPageContainer from './admin/admin_page_container';
import MessageFormContainer from './admin/messages/message_form_container';


const RootApp = () =>(
  <div>
    <Switch>
			<Route path="/enquiries/messageform" component={MessageFormContainer} />
      <HighlyProtectedRoute path="/admin" component={AdminPageContainer} />
      <ProtectedRoute exact path="/loggedhome" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
			<AuthRoute path="/" component={HomePageContainer} />
			<Route path="/" component={() => <h1>ERROR, YOU MAY BE LOST</h1>} />
    </Switch>
  </div>
);

export default RootApp;