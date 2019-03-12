/*
 *
 * Authentication actions
 *
 */

import { SET_CURRENT_USER, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from './constants';

// sign in actions
export const signInRequest = userData => ({
  type: SIGNIN_REQUEST,
  userData,
});

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo,
});

export const signInFailed = err => ({
  type: SIGNIN_FAILURE,
  err,
});

// sign out actions
export const signoutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

export const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
  payload: {},
});
