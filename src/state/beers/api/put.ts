import { createAction } from '@reduxjs/toolkit';

import { Beer } from '../../../models/Beer';
import {
  PUT_BEER_FAILURE,
  PUT_BEER_REQUEST,
  PUT_BEER_SUCCESS,
} from '../actions/types';

export const putBeerRequest = createAction<Beer>(PUT_BEER_REQUEST);
export const putBeerSuccess = createAction<Beer>(PUT_BEER_SUCCESS);
export const putBeerFailure = createAction<string>(PUT_BEER_FAILURE);
