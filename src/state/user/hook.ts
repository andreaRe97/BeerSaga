import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthFields } from '../../models/User';
import { AppState } from '../rootReducer';
import { loginUserRequest } from './api/login';
import { UserState } from './reducers';

export function useUser() {
  const { data: user, status, errors } = useSelector<AppState, UserState>(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (authFields: AuthFields) => {
      dispatch(loginUserRequest(authFields));
    },
    [dispatch]
  );

  return {
    user,
    status,
    errors,
    loginUser,
  };
}
