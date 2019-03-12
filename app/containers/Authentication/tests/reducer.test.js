import { fromJS } from 'immutable';
import authenticationContainerReducer from '../reducer';

describe('authenticationContainerReducer', () => {
  it('returns the initial state', () => {
    expect(authenticationContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
