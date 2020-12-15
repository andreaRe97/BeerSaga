import { createReducer } from '@reduxjs/toolkit';

import {
  fetchBeersFailureCase,
  fetchBeersRequestCase,
  fetchBeersSuccessCase,
} from '../cases/fetch';
import {
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
} from '../actions/types';
import { Beer } from '../../../models/Beer';
import { CREATE_BEER_FAILURE, CREATE_BEER_REQUEST, CREATE_BEER_SUCCESS } from '../actions/types/create';
import { createBeerFailureCase, createBeerRequestCase, createBeerSuccessCase } from '../cases/create';

export type BeerState = {
  data: Beer[];
  status: string;
  errors: string[];
};

export const INITIAL_STATE: BeerState = {
  data: [],
  status: 'idle',
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
    .addDefaultCase((state) => state);
});