import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from "react-toastify";

import { AuthFields } from '../../../models/User';
import { LOGIN_USER_REQUEST } from '../actions/types';
import { loginUserFailure, loginUserSuccess } from '../api/login';
import { loginUserUrl } from '../constants';

export function* watcherSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, workerSaga);
}

function loginUser(authFields : AuthFields) {
  return axios.post(loginUserUrl, authFields);
}

function* workerSaga(action: PayloadAction<AuthFields>) {
  try {
    const res = yield call(loginUser, action.payload);
    localStorage.setItem("token", res.data.jwt);
    toast(`Welcome back ${res.data.user.username}`);
    yield put(loginUserSuccess(res.data.user));
  } catch {
    yield put(loginUserFailure('Login failed'));
  }
}