import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';
import SwyInfo from './about/swy_info';
import Footer from './footer/Footer';


const Root = () =>(
	//This is where the major routes of the app are linked to their corresponding components / containers.
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <Route path="/swy_info" component={SwyInfo} />
      <ProtectedRoute exact path="/loggedhome" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/some_route" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
			<Route path="/" component={() => <h1>ERROR, YOU MAY BE LOST</h1>} />
    </Switch>
    <Footer />
  </div>
);

export default Root;