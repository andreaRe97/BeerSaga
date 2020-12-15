import { combineReducers } from '@reduxjs/toolkit';
import { beerReducer, BeerState } from './beers/reducers';
import { userReducer, UserState } from './user/reducers/user';

export default combineReducers({
  beer: beerReducer,
  user: userReducer
});

export type AppState = {
  beer: BeerState;
  user: UserState;
}