import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Beer } from '../../models/Beer';
import { AppState } from '../rootReducer';
import { createBeerRequest, putBeerRequest } from './api';
import { fetchBeersRequest } from './api/fetch';
import { BeerState } from './reducers';

export function useBeers() {
  const { data: beers, status, errors } = useSelector<AppState, BeerState>(
    (state) => state.beer
  );
  const dispatch = useDispatch();

  const fetchBeers = useCallback(() => {
    dispatch(fetchBeersRequest());
  }, [dispatch]);

  const createBeer = useCallback(
    (beer: Beer) => {
      dispatch(createBeerRequest(beer));
    },
    [dispatch]
  );

  const putBeer = useCallback(
    (beer: Beer) => {
      dispatch(putBeerRequest(beer));
    },
    [dispatch]
  );

  return {
    beers,
    status,
    errors,
    fetchBeers,
    createBeer,
    putBeer
  };
}
