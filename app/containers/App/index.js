/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Routes from '../../components/Routes';
import './index.css';
import Login from '../../components/Authentication/Login';
import NotFoundPage from '../../components/pages/NotFoundPage';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export { fakeAuth };

export default function App() {
  return (
    <div className="flexible-content">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/404" component={NotFoundPage}/>

        <Route exact path="/" component={Routes}/>
      </Switch>
    </div>
  );
}
