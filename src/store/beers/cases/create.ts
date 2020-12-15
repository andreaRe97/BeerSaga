import { PayloadAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import { CREATE_BEER_FAILURE, CREATE_BEER_SUCCESS } from '../actions/types/create';
import { INITIAL_STATE as BeerState } from '../reducers/beer';

export const createBeerRequestCase = (state: typeof BeerState) => ({
  ...state,
  status: 'creating',
});

export const createBeerSuccessCase = (
  state: typeof BeerState,
  action: PayloadAction<Beer, typeof CREATE_BEER_SUCCESS>
) => ({
  ...state,
  status: 'created',
  data: [...state.data, action.payload]
});

export const createBeerFailureCase = (
  state: typeof BeerState,
  action: PayloadAction<string, typeof CREATE_BEER_FAILURE>
) => ({
  ...state,
  status: 'failed',
  errors: [...state.errors, action.payload]
});