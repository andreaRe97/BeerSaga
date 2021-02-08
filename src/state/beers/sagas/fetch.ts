import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_BEERS_REQUEST } from '../actions/types';
import { baseUrl } from '../constants';
import { fetchBeersSuccess, fetchBeersFailure } from '../api/fetch';

export function* watcherSaga() {
  yield takeLatest(FETCH_BEERS_REQUEST, workerSaga);
}

function fetchBeers() {
  return axios({
    method: 'get',
    url: baseUrl
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