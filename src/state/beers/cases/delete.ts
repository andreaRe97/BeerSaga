import { PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

import { Beer } from "../../../models/Beer";
import { DomainStatus } from "../../types";
import { DELETE_BEER_FAILURE, DELETE_BEER_SUCCESS } from "../actions/types";
import { BeerState } from "../reducers";

export const deleteBeerRequestCase = (state: BeerState): BeerState => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const deleteBeerSuccessCase = (
  state: BeerState,
  action: PayloadAction<Beer, typeof DELETE_BEER_SUCCESS>
): BeerState => {
  if (action.payload.id) {
    const newData = {
      ...state.data,
      byIds: _.omit(state.data.byIds, action.payload.id),
      allIds: state.data.allIds.filter(
        (item: string) => item !== action.payload.id
      ),
    };
    return {
      ...state,
      status: DomainStatus.LOADED,
      data: { ...newData },
    };
  }

  return state;
};

export const deleteBeerFailureCase = (
  state: BeerState,
  action: PayloadAction<string, typeof DELETE_BEER_FAILURE>
): BeerState => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
