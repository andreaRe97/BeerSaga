import { all, fork } from 'redux-saga/effects';

import { watcherSaga as fetchBeersWatcherSaga } from './fetch';
import { watcherSaga as createBeerWatcherSaga } from './create';

export function* rootSaga() {
  yield all([
    fork(fetchBeersWatcherSaga),
    fork(createBeerWatcherSaga)
  ])
}