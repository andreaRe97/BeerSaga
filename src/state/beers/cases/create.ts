import { PayloadAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import { DomainStatus } from '../../types';
import { CREATE_BEER_FAILURE, CREATE_BEER_SUCCESS } from '../actions/types';
import { BeerState } from '../reducers';

export const createBeerRequestCase = (state: BeerState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const createBeerSuccessCase = (
  state: BeerState,
  action: PayloadAction<Beer, typeof CREATE_BEER_SUCCESS>
): BeerState => ({
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
  state: BeerState,
  action: PayloadAction<string, typeof CREATE_BEER_FAILURE>
): BeerState => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload]
});