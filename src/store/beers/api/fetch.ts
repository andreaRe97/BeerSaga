import { createAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import {
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
} from '../actions/types';

export const fetchBeersRequest = createAction(FETCH_BEERS_REQUEST);
export const fetchBeersSuccess = createAction<Beer[]>(FETCH_BEERS_SUCCESS);
export const fetchBeersFailure = createAction<string>(FETCH_BEERS_FAILURE);
