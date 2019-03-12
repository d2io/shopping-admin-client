import React from 'react';
import { Switch } from 'react-router-dom';
import TopNavigation from 'components/topNavigation';
import SideNavigation from 'components/sideNavigation';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import PrivateRoute from './PrivateRoutes';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation/>
        <SideNavigation/>

        <main id="content" className="p-5">
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPage}/>
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <PrivateRoute path="/profile" component={ProfilePage}/>
            <PrivateRoute path="/tables" component={TablesPage}/>
            <PrivateRoute path="/maps" component={MapsPage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Routes;
