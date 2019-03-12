import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authenticationContainer state domain
 */

const selectAuthenticationContainerDomain = state =>
  state.get('authenticationContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authentication
 */

const makeSelectAuthenticationContainer = () =>
  createSelector(selectAuthenticationContainerDomain, substate =>
    substate.toJS(),
  );

export default makeSelectAuthenticationContainer;
export { selectAuthenticationContainerDomain };
