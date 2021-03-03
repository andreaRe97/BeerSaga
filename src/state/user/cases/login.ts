import { PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../../models/User";
import { DomainStatus } from "../../types";
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../actions/types";
import { UserState } from "../reducers/user";

export const loginUserRequestCase = (state: UserState): UserState => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const loginUserSuccessCase = (
  state: UserState,
  action: PayloadAction<User, typeof LOGIN_USER_SUCCESS>
): UserState => ({
  ...state,
  status: DomainStatus.LOADED,
  data: action.payload,
});

export const loginUserFailureCase = (
  state: UserState,
  action: PayloadAction<string, typeof LOGIN_USER_FAILURE>
): UserState => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
