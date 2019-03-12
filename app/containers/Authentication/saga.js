import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fromJS } from 'immutable';
import { setAuthToken } from 'utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { push } from 'connected-react-router/immutable';
import { API_BASE_URL } from 'components/constants';
import { SIGNIN_REQUEST, SIGNOUT_REQUEST } from './constants';
import { setCurrentUser, signInFailed, signoutSuccess } from './actions';

// Individual exports for testing
function* doSignOut() {
  // remove token from Cookies
  Cookies.remove('token');

  // remove auth header for future request
  setAuthToken(false);

  // set current user to empty object
  yield put(signoutSuccess());
  yield put(push('/'));
}

function* doSignIn(data) {
  try {
    const res = yield call(
      axios.post,
      `${API_BASE_URL}/auth/signin`,
      data.userData,
    );

    debugger;

    const { accessToken } = res.data;

    // handleUpdate to cookies
    // if user check remember session, set expire cookie in 1w
    if (data.userData.isRemember) {
      Cookies.set('token', accessToken, { expires: 7 });
    } else {
      Cookies.set('token', accessToken);
    }

    // set token to Auth header
    setAuthToken(accessToken);

    // decode token to get user data
    const plainData = jwtDecode(accessToken);
    // set current user
    yield put(setCurrentUser(plainData));
  } catch (err) {
    yield put(signInFailed(fromJS(err.response.data)));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(SIGNIN_REQUEST, doSignIn),
    takeLatest(SIGNOUT_REQUEST, doSignOut),
  ]);
}
