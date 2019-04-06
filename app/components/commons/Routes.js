import React from 'react';
import { Switch } from 'react-router-dom';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import TablesPage from '../pages/TablesPage';
import MapsPage from '../pages/MapsPage';
import PrivateRoute from './PrivateRoute';
import Footer from './Footer';
import PicturePage from '../pages/picture/PicturePage';
import PictureTypePage from '../pages/picture/PictureTypeContainer';
import PictureTypeDetail from '../pages/picture/PictureTypeDetail';
import PictureTypeUpdate from '../pages/picture/PictureTypeUpdate';

// Import decode token package

class Routes extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <SideNavigation />

        <main id="content" className="p-5">
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <PrivateRoute path="/tables" component={TablesPage} />
            <PrivateRoute path="/maps" component={MapsPage} />
            <PrivateRoute path="/picture" component={PicturePage} />
            <PrivateRoute
              exact
              path="/picture-type"
              component={PictureTypePage}
            />
            <PrivateRoute
              exact
              path="/picture-type/detail"
              component={PictureTypeDetail}
            />
            <PrivateRoute
              exact
              path="/picture-type/update"
              component={PictureTypeUpdate}
            />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Routes;
