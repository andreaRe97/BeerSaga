import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_BEERS_REQUEST } from '../actions/types';
import { fetchBeersUrl } from '../constants';
import { fetchBeersSuccess, fetchBeersFailure } from '../api/fetch';

export function* watcherSaga() {
  yield takeLatest(FETCH_BEERS_REQUEST, workerSaga);
}

function fetchBeers() {
  return axios({
    method: 'get',
    url: fetchBeersUrl
  });
}

function* workerSaga() {
  try {
    const res = yield call(fetchBeers);
    yield put(fetchBeersSuccess(res.data));
  } catch {
    yield put(fetchBeersFailure('cannot retrive beers'));
  }
}