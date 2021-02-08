import { createAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import {
  CREATE_BEER_FAILURE,
  CREATE_BEER_REQUEST,
  CREATE_BEER_SUCCESS,
} from '../actions/types';

export const createBeerRequest = createAction<Beer>(CREATE_BEER_REQUEST);
export const createBeerSuccess = createAction<Beer>(CREATE_BEER_SUCCESS);
export const createBeerFailure = createAction<string>(CREATE_BEER_FAILURE);
