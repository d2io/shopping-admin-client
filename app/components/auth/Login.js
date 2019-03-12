/**
 *
 * Authentication
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      usernameOrEmail: '',
      password: '',
    };
  }

  login = () => {
    debugger;

    this.props.onSignIn({
      usernameOrEmail: this.state.usernameOrEmail,
      password: this.state.password,
    });

    console.log(JSON.stringify(this.state));
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }

    return (
      <MDBContainer className="p-5">
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your user name"
                      icon="user"
                      group
                      type="text"
                      validate
                      name="usernameOrEmail"
                      error="wrong"
                      success="right"
                      value={this.state.usernameOrEmail}
                      onInput={this.handleInput}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      name="password"
                      validate
                      value={this.state.password}
                      onInput={this.handleInput}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={this.login}>Login</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Login.propTypes = {
  onSignIn: PropTypes.func,
};

export default Login;
