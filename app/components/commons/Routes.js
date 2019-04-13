import React from 'react';
import { Switch } from 'react-router-dom';
import TopNavigation from './topNavigation';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import TablesPage from '../pages/TablesPage';
import MapsPage from '../pages/MapsPage';
import PrivateRoute from './PrivateRoute';
import Footer from './Footer';
import PicturePage from '../pages/picture/PicturePage';
import PictureTypePage from '../pages/picture/PictureTypeContainer';
import PictureTypeDetail from '../pages/picture/PictureTypeDetail';
import PictureTypeAddOrUpdate from '../pages/picture/PictureTypeAddOrUpdate';
import Sidebar from './Sidebar';

// Import decode token package

class Routes extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    return (
      <div>
        <TopNavigation />

        <Sidebar
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          {...this.props}
        />

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
              component={PictureTypeAddOrUpdate}
            />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Routes;
