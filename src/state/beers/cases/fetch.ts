import { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Beer } from '../../../models/Beer';
import { BeerState } from '../reducers';
import { FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from '../actions/types';
import { DomainStatus } from '../../types';

export const fetchBeersRequestCase = (state: BeerState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const fetchBeersSuccessCase = (
  state: BeerState,
  action: PayloadAction<Beer[], typeof FETCH_BEERS_SUCCESS>
): BeerState => ({ 
  ...state, 
  status: DomainStatus.LOADED, 
  data: {
    byIds: _.mapKeys(action.payload, 'id'),
    allIds: action.payload.map(item => item.id)
  }
});

export const fetchBeersFailureCase = (
  state: BeerState,
  action: PayloadAction<string, typeof FETCH_BEERS_FAILURE>
): BeerState => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
