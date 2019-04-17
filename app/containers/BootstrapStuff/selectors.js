import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the bootstrapStuff state domain
 */

const selectBootstrapStuffDomain = state =>
  state.get('bootstrapStuff', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BootstrapStuff
 */

const makeSelectBootstrapStuff = () =>
  createSelector(selectBootstrapStuffDomain, substate => substate.toJS());

export default makeSelectBootstrapStuff;
export { selectBootstrapStuffDomain };
