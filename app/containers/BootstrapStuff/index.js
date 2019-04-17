/**
 *
 * BootstrapStuff
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBootstrapStuff from './selectors';
import reducer from './reducer';
import saga from './saga';

function BootstrapStuff() {
  return <div />;
}

BootstrapStuff.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bootstrapStuff: makeSelectBootstrapStuff(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'bootstrapStuff', reducer });
const withSaga = injectSaga({ key: 'bootstrapStuff', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BootstrapStuff);
