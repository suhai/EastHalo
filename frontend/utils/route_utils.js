import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// renders the login / sign up modal if not logged in, otherwise renders the users home page
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/subhome" />
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

// renders component if logged in and is an admin, otherwise redirects to the public homepage
// const HighlyProtected = ({component: Component, path, loggedInAdmin}) => (
//   <Route path={path} render={(props) => (
//      loggedInAdmin ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to="/subhome"/>
//     )
//   )}/>
// );

// access the Redux state to check if the user is logged in and/or is an admin
const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.currentUser),
	// loggedInAdmin: Boolean(state.session.currentUser.is_admin)
});

// connect AuthRoute to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect ProtectedRoute to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

// connect HighlyProtectedRoute to the redux state
// export const HighlyProtectedRoute = withRouter(connect(mapStateToProps, null)(HighlyProtected));
