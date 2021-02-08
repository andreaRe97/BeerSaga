import { useSelector } from 'react-redux';
import { AppState } from '../../rootReducer';
import { BeerState } from '../reducers';

export function useBeersStatsade() {
  const { data, status, errors } = useSelector<AppState, BeerState>(
    (state) => state.beer
  );

  return { data, status, errors };
} 