import { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Beer } from '../../../models/Beer';
import { INITIAL_STATE as BeerState } from '../reducers';
import { FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from '../actions/types';
import { DomainStatus } from '../../types';

export const fetchBeersRequestCase = (state: typeof BeerState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const fetchBeersSuccessCase = (
  state: typeof BeerState,
  action: PayloadAction<Beer[], typeof FETCH_BEERS_SUCCESS>
) => ({ 
  ...state, 
  status: DomainStatus.LOADED, 
  data: {
    byIds: _.mapKeys(action.payload, 'id'),
    allIds: action.payload.map(item => item.id)
  }
});

export const fetchBeersFailureCase = (
  state: typeof BeerState,
  action: PayloadAction<string, typeof FETCH_BEERS_FAILURE>
) => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
