/**
 * Author: DuongHan
 * Created: 4/16/19
 *
 */
import { all, call } from 'redux-saga/effects';
import authSaga from 'containers/Authentication/saga';
import baseSaga from 'containers/BootstrapStuff/saga';

const getRouterSaga = function* rootSaga() {
  yield all([call(authSaga), call(baseSaga)]);
};

export default getRouterSaga;
