import { PayloadAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import { INITIAL_STATE as BeerState } from '../reducers/beer';
import { FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from '../actions/types';

export const fetchBeersRequestCase = (state: typeof BeerState) => ({
  ...state,
  status: 'fetching',
});

export const fetchBeersSuccessCase = (
  state: typeof BeerState,
  action: PayloadAction<Beer[], typeof FETCH_BEERS_SUCCESS>
) => ({ ...state, status: 'loaded', data: action.payload});

export const fetchBeersFailureCase = (
  state: typeof BeerState,
  action: PayloadAction<string, typeof FETCH_BEERS_FAILURE>
) => ({
  ...state,
  status: 'failed',
  errors: [...state.errors, action.payload],
});
