/*
 *
 * AuthenticationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_CURRENT_USER, SIGNIN_FAILURE, SIGNOUT_SUCCESS } from './constants';
import isEmpty from '../../utils/validation/isEmpty';

export const initialState = fromJS({});

function authenticationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return state.mergeDeep({
        isAuthorized: !isEmpty(action.userInfo),
        user: action.userInfo,
      });
    case SIGNIN_FAILURE:
      return state.set('errors', action.err);
    case SIGNOUT_SUCCESS:
      return state.set('isAuthorized', false).set('user', {});
    default:
      return state;
  }
}

export default authenticationContainerReducer;
