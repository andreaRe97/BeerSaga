import { PayloadAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import { PUT_BEER_FAILURE, PUT_BEER_SUCCESS } from '../actions/types';
import { INITIAL_STATE as BeerState } from '../reducers/beer';

export const putBeerRequestCase = (state: typeof BeerState) => ({
  ...state,
  status: 'updating',
});

export const putBeerSuccessCase = (
  state: typeof BeerState,
  action: PayloadAction<Beer, typeof PUT_BEER_SUCCESS>
) => ({
  ...state,
  status: 'updated',
  data: state.data.map(item => item.id === action.payload.id ? action.payload : item)
});

export const putBeerFailureCase = (
  state: typeof BeerState,
  action: PayloadAction<string, typeof PUT_BEER_FAILURE>
) => ({
  ...state,
  status: 'failed',
  errors: [...state.errors, action.payload]
});