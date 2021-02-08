import { createAction} from '@reduxjs/toolkit';

import { AuthFields, User } from '../../../models/User';
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from '../actions/types';

export const loginUserRequest = createAction<AuthFields>(LOGIN_USER_REQUEST);
export const loginUserSuccess = createAction<User>(LOGIN_USER_SUCCESS);
export const loginUserFailure = createAction<string>(LOGIN_USER_FAILURE);


