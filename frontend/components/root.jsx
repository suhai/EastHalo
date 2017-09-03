import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';
import SwyInfo from './about/swy_info';
import Footer from './footer/Footer';


const Root = () =>(
  <div>
		<h1 style={{textAlign: 'center' }}>Welcome to EastHalo University</h1>
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <Route path="/swy_info" component={SwyInfo} />
      <ProtectedRoute exact path="/courses" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/users" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
    </Switch>
    <Footer />
  </div>
);

export default Root;