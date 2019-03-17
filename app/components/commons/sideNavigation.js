import React, { Component } from 'react';
import { MDBIcon, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from '../../images/skategoat.jpg';

class SideNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [],
    };

    this.fetchMenuEntryData();
  }

  fetchMenuEntryData = () => {
    axios.get('/api/page').then(res => {
      console.log(JSON.stringify(res.data));
      this.setState({ menuList: res.data });
    });
  };

  render() {
    return (
      <div className="sidebar-fixed position-fixed">
        <a href="#!" className="logo-wrapper waves-effect">
          <img alt="MDB React Logo" className="img-fluid" src={logo} />
        </a>

        <MDBListGroup className="list-group-flush">
          {this.state.menuList
            .filter(menuEntry => !menuEntry.parent)
            .map(menuEntry => (
              <NavLink
                exact
                to={menuEntry.link || '/#'}
                activeClassName="activeClass"
              >
                <MDBListGroupItem>
                  <MDBIcon
                    icon={menuEntry.classAtrtibute || ''}
                    className="mr-3"
                  />
                  {menuEntry.name}
                  <MDBListGroup>
                    <MDBListGroupItem>asdasdas</MDBListGroupItem>
                    <MDBListGroupItem>asdasdas</MDBListGroupItem>
                    <MDBListGroupItem>asdasdas</MDBListGroupItem>
                    <MDBListGroupItem>asdasdas</MDBListGroupItem>
                  </MDBListGroup>
                </MDBListGroupItem>
              </NavLink>
            ))}
        </MDBListGroup>
      </div>
    );
  }
}

export default SideNavigation;
