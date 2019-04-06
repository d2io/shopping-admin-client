/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from 'components/commons/Spinner';
import Routes from 'components/commons/Routes';
import NotFoundPage from 'components/pages/NotFoundPage';
import { ACCESS_TOKEN } from 'components/constants';
import { getCurrentUser } from 'utils/APIUtils';
import './index.css';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Login from '../Authentication/Login';
import saga from '../Authentication/saga';
import reducer from '../Authentication/reducer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
    };
  }

  loadCurrentUser = () => {
    this.setState({
      isLoading: true,
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.loadCurrentUser();
  }

  // Handle Logout, Set currentUser and isAuthenticated state which will be passed to other components
  handleLogout = (
    redirectTo = '/',
    notificationType = 'success',
    description = "You're successfully logged out.",
  ) => {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false,
    });

    this.props.history.push(redirectTo);
  };

  /*
   This method is called by the Login component after successful login
   so that we can load the logged-in user details and set the currentUser &
   isAuthenticated state, which other components will use to render their JSX
  */
  handleLogin = () => {
    this.loadCurrentUser();
    this.props.history.push('/');
  };

  render() {
    const { isAuthenticated, isLoading, currentUser } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className="flexible-content">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFoundPage} />
          <Route component={Routes} />
          <Route render={() => <Redirect path="/404" />} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
)(App);
