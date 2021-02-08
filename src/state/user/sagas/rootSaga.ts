import { all, fork } from 'redux-saga/effects';

import { watcherSaga as loginUserSaga } from './login';

export function* rootSaga() {
  yield all([
    fork(loginUserSaga)
  ])
}