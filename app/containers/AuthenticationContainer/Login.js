/**
 * Author: DuongHan
 * Created: 3/12/19
 *
 */

// import React from 'react';
import { connect } from 'react-redux';
import Login from 'components/Authentication/Login';
import { signInRequest } from './actions';

const mapStateToProps = state => ({
  errors: state.getIn(['auth', 'errors']),
  auth: state.get('auth'),
});

const mapDispatchToProps = dispatch => ({
  onSignIn: userData => dispatch(signInRequest(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);