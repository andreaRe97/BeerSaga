import { useSelector } from 'react-redux';
import { AppState } from '../../rootReducer';
import { UserState } from '../reducers';

export function useUserState() {
  const { data, status, errors } = useSelector<AppState, UserState>(
    (state) => state.user
  );
  return { data, status, errors };
}
