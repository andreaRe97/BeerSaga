import { createReducer } from "@reduxjs/toolkit";

import {
  fetchBeersFailureCase,
  fetchBeersRequestCase,
  fetchBeersSuccessCase,
  createBeerFailureCase,
  createBeerRequestCase,
  createBeerSuccessCase,
  putBeerRequestCase,
  putBeerSuccessCase,
  putBeerFailureCase,
  deleteBeerRequestCase,
  deleteBeerSuccessCase,
  deleteBeerFailureCase,
} from "../cases";
import {
  DELETE_BEER_FAILURE,
  DELETE_BEER_REQUEST,
  DELETE_BEER_SUCCESS,
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  PUT_BEER_FAILURE,
  PUT_BEER_REQUEST,
  PUT_BEER_SUCCESS,
} from "../actions/types";
import {
  CREATE_BEER_FAILURE,
  CREATE_BEER_REQUEST,
  CREATE_BEER_SUCCESS,
} from "../actions/types/create";
import { Beer } from "../../../models/Beer";
import { DomainStatus } from "../../types";

export type BeerState = {
  data: {
    byIds: _.Dictionary<Beer> | undefined;
    allIds: any;
  };
  status: string;
  errors: string[];
};

export const INITIAL_STATE: BeerState = {
  data: {
    byIds: undefined,
    allIds: [],
  },
  status: DomainStatus.IDLE,
  errors: [],
};

export const beerReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(FETCH_BEERS_REQUEST, fetchBeersRequestCase)
    .addCase(FETCH_BEERS_SUCCESS, fetchBeersSuccessCase)
    .addCase(FETCH_BEERS_FAILURE, fetchBeersFailureCase)
    .addCase(CREATE_BEER_REQUEST, createBeerRequestCase)
    .addCase(CREATE_BEER_SUCCESS, createBeerSuccessCase)
    .addCase(CREATE_BEER_FAILURE, createBeerFailureCase)
    .addCase(PUT_BEER_REQUEST, putBeerRequestCase)
    .addCase(PUT_BEER_SUCCESS, putBeerSuccessCase)
    .addCase(PUT_BEER_FAILURE, putBeerFailureCase)
    .addCase(DELETE_BEER_REQUEST, deleteBeerRequestCase)
    .addCase(DELETE_BEER_SUCCESS, deleteBeerSuccessCase)
    .addCase(DELETE_BEER_FAILURE, deleteBeerFailureCase)
    .addDefaultCase((state) => state);
});
