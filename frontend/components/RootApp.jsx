import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';
import SwyInfo from './about/swy_info';
import MessageFormContainer from './admin/messages/message_form_container';


const RootApp = () =>(
  <div>
    <Switch>
			<Route path="/enquiries/messageform" component={MessageFormContainer} />
      <Route path="/swy_info" component={SwyInfo} />
      <ProtectedRoute exact path="/loggedhome" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
			<AuthRoute path="/" component={HomePageContainer} />
			<Route path="/" component={() => <h1>ERROR, YOU MAY BE LOST</h1>} />
    </Switch>
    {/* <Footer /> */}
  </div>
);

export default RootApp;