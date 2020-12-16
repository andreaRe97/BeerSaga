import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { Beer } from '../../../models/Beer';
import { putBeerUrl } from '../constants';
import { PUT_BEER_REQUEST } from '../actions/types';
import { putBeerFailure, putBeerSuccess } from '../api';

export function* watcherSaga() {
  yield takeLatest(PUT_BEER_REQUEST, workerSaga);
}

function putBeer(beer: Beer) {
  return axios.put(
    putBeerUrl + `/${beer.id}`,
    beer,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
}


export function* workerSaga(action: PayloadAction<Beer>) {
  try {
    const res = yield call(putBeer, action.payload);
    yield put(putBeerSuccess(res.data));
  } catch {
    yield put(putBeerFailure('Put beer failed'));
  }
}