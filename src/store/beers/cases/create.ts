import { PayloadAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import { DomainStatus } from '../../types';
import { CREATE_BEER_FAILURE, CREATE_BEER_SUCCESS } from '../actions/types';
import { INITIAL_STATE as BeerState } from '../reducers';

export const createBeerRequestCase = (state: typeof BeerState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const createBeerSuccessCase = (
  state: typeof BeerState,
  action: PayloadAction<Beer, typeof CREATE_BEER_SUCCESS>
) => ({
  ...state,
  status: DomainStatus.LOADED,
  data: {
    ...state.data,
    byIds: {
      ...state.data.byIds,
      [action.payload.id!]: action.payload
    },
    allIds: [...state.data.allIds, action.payload.id]
  }
});

export const createBeerFailureCase = (
  state: typeof BeerState,
  action: PayloadAction<string, typeof CREATE_BEER_FAILURE>
) => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload]
});