import { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Beer } from '../../../models/Beer';
import { DomainStatus } from '../../types';
import { DELETE_BEER_FAILURE, DELETE_BEER_SUCCESS } from '../actions/types';
import { INITIAL_STATE as BeerState } from '../reducers';

export const deleteBeerRequestCase = (state: typeof BeerState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const deleteBeerSuccessCase = (
  state: typeof BeerState,
  action: PayloadAction<Beer, typeof DELETE_BEER_SUCCESS>,
) => {
  
  const newData = {
    ...state.data,
    byIds: _.omit(state.data.byIds, action.payload.id!),
    allIds: state.data.allIds.filter((item: string) => item !== action.payload.id!)
  }

  return {
    ...state,
    status: DomainStatus.LOADED,
    data: {...newData}
  };
};

export const deleteBeerFailureCase = (
  state: typeof BeerState,
  action: PayloadAction<string, typeof DELETE_BEER_FAILURE>,
) => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
