import { createAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import {
  DELETE_BEER_FAILURE,
  DELETE_BEER_REQUEST,
  DELETE_BEER_SUCCESS,
} from '../actions/types';

export const deleteBeerRequest = createAction<Beer>(DELETE_BEER_REQUEST);
export const deleteBeerSuccess = createAction<Beer>(DELETE_BEER_SUCCESS);
export const deleteBeerFailure = createAction<string>(DELETE_BEER_FAILURE);
