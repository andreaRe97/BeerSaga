import { all, fork } from 'redux-saga/effects';

import { rootSaga as beerSaga } from './beers/sagas';
import { rootSaga as userSaga } from './user/sagas';

export function* rootSaga() {
  yield all([
    fork(beerSaga),
    fork(userSaga)
  ])
}