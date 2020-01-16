import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom'
const Auth = ({path, exact, loggedIn, component: Component}) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
)
const Protected = ({path, exact, loggedIn, component: Component}) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
)
const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.name) };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))