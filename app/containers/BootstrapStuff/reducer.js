/*
 *
 * BootstrapStuff reducer
 *
 */

import { fromJS } from 'immutable';
import { INIT_SIDEBAR_ROUTES_FAILED, INIT_SIDEBAR_ROUTES_SUCCESS } from './constants';

export const initialState = fromJS({
  routes: [],
  errors: {},
});

function bootstrapStuffReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SIDEBAR_ROUTES_SUCCESS:
      return state.set('routes', action.routes);
    case INIT_SIDEBAR_ROUTES_FAILED:
      return state.set('errors', action.errors);
    default:
      return state;
  }
}

export default bootstrapStuffReducer;
