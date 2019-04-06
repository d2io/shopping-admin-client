/**
 * Author: DuongHan
 * Created: 4/3/19
 *
 */

import { fromJS } from 'immutable';
import { FETCH_PICTURE_TYPE_SUCCESS } from './constants';

export const initialState = fromJS({
  picTypeList: [],
  errors: {},
});

const pictureTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURE_TYPE_SUCCESS:
      return state.set('picTypeList', action.pictureTypes);
    default:
      return state;
  }
};

export default pictureTypeReducer;
