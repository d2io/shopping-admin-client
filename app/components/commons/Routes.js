import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import TablesPage from '../pages/TablesPage';
import MapsPage from '../pages/MapsPage';
import PrivateRoute from './PrivateRoute';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <SideNavigation />

        <main id="content" className="p-5">
          <Switch>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute exact path="/" component={DashboardPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <PrivateRoute path="/tables" component={TablesPage} />
            <PrivateRoute path="/maps" component={MapsPage} />
            <PrivateRoute render={() => <Redirect path="/404" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Routes;
