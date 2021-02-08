import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { CREATE_BEER_REQUEST } from '../actions/types';
import { Beer } from '../../../models/Beer';
import { baseUrl } from '../constants';
import { createBeerFailure, createBeerSuccess } from '../api';

export function* watcherSaga() {
  yield takeLatest(CREATE_BEER_REQUEST, workerSaga);
}

function createBeer(beer: Beer) {
  return axios.post(baseUrl, beer, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

function* workerSaga(action: PayloadAction<Beer>) {
  try {
    const res = yield call(createBeer, action.payload);
    toast(`Beer sucessfully added`);
    yield put(createBeerSuccess(res.data));
  } catch {
    toast(`Cannot add a new beer, we're sorry`);
    yield put(createBeerFailure('Create beer failed'));
  }
}
