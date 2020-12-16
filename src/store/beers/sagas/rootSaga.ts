import { all, fork } from 'redux-saga/effects';

import { watcherSaga as fetchBeersWatcherSaga } from './fetch';
import { watcherSaga as createBeerWatcherSaga } from './create';
import { watcherSaga as putBeerWatcherSaga } from './put';

export function* rootSaga() {
  yield all([
    fork(fetchBeersWatcherSaga),
    fork(createBeerWatcherSaga),
    fork(putBeerWatcherSaga)
  ])
}