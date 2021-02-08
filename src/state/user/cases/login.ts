import { PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../../models/User";
import { DomainStatus } from "../../types";
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../actions/types";
import { INITIAL_STATE as UserState } from "../reducers/user";

export const loginUserRequestCase = (state: typeof UserState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const loginUserSuccessCase = (
  state: typeof UserState,
  action: PayloadAction<User, typeof LOGIN_USER_SUCCESS>
) => ({
  ...state,
  status: DomainStatus.LOADED,
  data: action.payload,
});

export const loginUserFailureCase = (
  state: typeof UserState,
  action: PayloadAction<string, typeof LOGIN_USER_FAILURE>
) => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
