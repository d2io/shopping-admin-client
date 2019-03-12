/**
 *
 * Authentication
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../../containers/App';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/"/>;
    }

    return (
      <MDBContainer className="p-5">
        <MDBRow center>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your user name"
                  icon="user"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn onClick={this.login}>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Login.propTypes = {};

export default Login;
