import React, { Component } from 'react';
import { MDBIcon, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from '../../images/skategoat.jpg';

class SideNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };

    this.fetchMenuEntryData();
  }

  fetchMenuEntryData = () => {
    axios
      .get('/api/page', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNTUyNjk4ODAxLCJleHAiOjE1NTMzMDM2MDF9.lUXHh93plCNUCShqDGLrq6LjBlM-XCilSvXei8Ti0jP0mHfhuLB4NAZGf3X0uqKQAlyCtWY8X3_z_Yd_y_l1Cw',
        },
      })
      .then(res => {
        console.log(JSON.stringify(res.data));
      });
  };

  render() {
    return (
      <div className="sidebar-fixed position-fixed">
        <a href="#!" className="logo-wrapper waves-effect">
          <img alt="MDB React Logo" className="img-fluid" src={logo} />
        </a>
        <MDBListGroup className="list-group-flush">
          <NavLink exact to="/" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="chart-pie" className="mr-3" />
              Dashboard
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/profile" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="user" className="mr-3" />
              Profile
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/tables" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="table" className="mr-3" />
              Tables
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/maps" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="map" className="mr-3" />
              Maps
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/404" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="exclamation" className="mr-3" />
              404
            </MDBListGroupItem>
          </NavLink>
        </MDBListGroup>
      </div>
    );
  }
}

export default SideNavigation;
