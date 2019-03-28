import React, { Component } from 'react';
import { MDBCollapse, MDBIcon, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from 'images/skategoat.jpg';

class SideNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [],
      collapseID: '',
    };

    this.fetchMenuEntryData();
  }

  fetchMenuEntryData = () => {
    axios.get('/api/page').then(res => {
      console.log(JSON.stringify(res.data));
      this.setState({ menuList: res.data });
    });
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  render() {
    return (
      <div className="sidebar-fixed position-fixed">
        <a href="#!" className="logo-wrapper waves-effect">
          <img alt="MDB React Logo" className="img-fluid" src={logo} />
        </a>

        {/* <a href="#" style={{ textAlign: 'center', marginBottom: 20 }}> */}
        {/*  <h3>ADMIN</h3> */}
        {/* </a> */}

        <MDBListGroup className="list-group-flush">
          {this.state.menuList
            .filter(menuEntry => !menuEntry.parent)
            .map(menuEntry => (
              <MDBListGroupItem>
                <div onClick={this.toggleCollapse(menuEntry.name)}>
                  <MDBIcon
                    icon={menuEntry.classAtrtibute || ''}
                    className="mr-3"
                  />
                  {menuEntry.name}
                </div>

                <MDBCollapse id={menuEntry.name} isOpen={this.state.collapseID}>
                  <MDBListGroup className="list-group-flush">
                    {this.state.menuList
                      .filter(child => child.parent === menuEntry.id)
                      .map(a => (
                        <NavLink
                          exact
                          to={a.link}
                          activeClassName="activeClass"
                        >
                          <MDBListGroupItem>{a.name}</MDBListGroupItem>
                        </NavLink>
                      ))}
                  </MDBListGroup>
                </MDBCollapse>
              </MDBListGroupItem>
            ))}
        </MDBListGroup>
      </div>
    );
  }
}

export default SideNavigation;
