import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import { fromJS } from 'immutable';
import { INIT_SIDEBAR_ROUTES } from './constants';
import { initSidebarRoutesFailed, initSidebarRoutesSucess } from './actions';

const initSidebarRoutes = function* initSidebarRoutes() {
  try {
    const res = yield call(axios.get, '/api/v1/page');
    debugger;
    const routes = res.data;

    yield put(initSidebarRoutesSucess(routes));
  } catch (err) {
    yield put(initSidebarRoutesFailed(fromJS(err.response.data)));
  }
};

export { initSidebarRoutes };

export default function* initStuffSaga() {
  yield take(INIT_SIDEBAR_ROUTES, initSidebarRoutes);
}
