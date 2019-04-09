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
  }

  fetchMenuEntryData = () => {
    axios
      .get('/api/v1/page')
      .then(res => {
        this.setState({ menuList: res.data });
      })
      .catch(err => console.log(err));
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  componentDidMount() {
    this.fetchMenuEntryData();
  }

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
              <MDBListGroupItem key={menuEntry.id}>
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
                          key={a.id}
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
