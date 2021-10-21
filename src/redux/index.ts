import { combineReducers, createStore, Store } from 'redux';
import { HomeState } from './Home/actions';

import homeReducer from './Home';

export interface ApplicationState {
  Home: HomeState;
}

const reducer = combineReducers({
  Home: homeReducer,
});

const INITIAL_STATE = {};

export const store: Store = createStore(reducer, INITIAL_STATE);