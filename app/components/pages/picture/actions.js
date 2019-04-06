/**
 * Author: DuongHan
 * Created: 4/3/19
 *
 */

import {
  FETCH_PICTURE_TYPE_FAILED,
  FETCH_PICTURE_TYPE_SUCCESS,
  PICTURE_TYPE_REQUEST,
  SET_PICTURE_TYPE_LIST,
} from './constants';

export const requestPictureType = () => ({
  type: PICTURE_TYPE_REQUEST,
});

export const fetchPictureTypeSuccess = pictureTypes => ({
  type: FETCH_PICTURE_TYPE_SUCCESS,
  pictureTypes,
});

export const fetchPictureTypeFailed = errors => ({
  type: FETCH_PICTURE_TYPE_FAILED,
  errors,
});

export const setCurrentUser = userInfo => ({
  type: SET_PICTURE_TYPE_LIST,
  userInfo,
});
