import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// renders the login / sign up modal if not logged in, otherwise renders the users home page
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/loggedhome" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the public homepage
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/"/>
    )
  )}/>
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// connect AuthRoute to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect ProtectedRoute to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));