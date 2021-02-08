import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Beer } from '../../../models/Beer';
import { baseUrl } from '../constants';
import { DELETE_BEER_REQUEST } from '../actions/types';
import { deleteBeerFailure, deleteBeerSuccess } from '../api';

export function* watcherSaga() {
  yield takeLatest(DELETE_BEER_REQUEST, workerSaga);
}

function deleteBeer(beer: Beer) {
  return axios.delete(baseUrl + `/${beer.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export function* workerSaga(action: PayloadAction<Beer>) {
  try {
    const res = yield call(deleteBeer, action.payload);
    toast('Beer successfully deleted');
    yield put(deleteBeerSuccess(res.data));
  } catch {
    yield put(deleteBeerFailure('Delete beer failed'));
  }
}
