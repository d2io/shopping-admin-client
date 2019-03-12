import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { fakeAuth } from '../containers/App';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login"/>
      )
    }
  />
);

export default PrivateRoute;
