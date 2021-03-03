import { PayloadAction } from "@reduxjs/toolkit";

import { Beer } from "../../../models/Beer";
import { DomainStatus } from "../../types";
import { PUT_BEER_FAILURE, PUT_BEER_SUCCESS } from "../actions/types";
import { BeerState } from "../reducers/beer";

export const putBeerRequestCase = (state: BeerState): BeerState => ({
  ...state,
  status: DomainStatus.LOADING,
});

export const putBeerSuccessCase = (
  state: BeerState,
  action: PayloadAction<Beer, typeof PUT_BEER_SUCCESS>
) => ({
  ...state,
  status: DomainStatus.LOADED,
  data: {
    ...state.data,
    byIds: {
      ...state.data.byIds,
      [action.payload.id!]: action.payload,
    },
  },
});

export const putBeerFailureCase = (
  state: BeerState,
  action: PayloadAction<string, typeof PUT_BEER_FAILURE>
): BeerState => ({
  ...state,
  status: DomainStatus.ERROR,
  errors: [...state.errors, action.payload],
});
