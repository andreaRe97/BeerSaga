import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../../models/User';
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../actions/types';
import { loginUserFailureCase, loginUserRequestCase, loginUserSuccessCase } from '../cases';

export type UserState = {
  data: Partial<User>;
  status: string;
  errors: string[];
};

export const INITIAL_STATE: UserState = {
  data: {},
  status: 'idle',
  errors: []
};

export const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
  .addCase(LOGIN_USER_REQUEST, loginUserRequestCase)
  .addCase(LOGIN_USER_SUCCESS, loginUserSuccessCase)
  .addCase(LOGIN_USER_FAILURE, loginUserFailureCase)
})