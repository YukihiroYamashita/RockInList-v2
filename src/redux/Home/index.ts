import { AnyAction } from 'redux';
import { Band, HomeState } from './actions';
import { CREATE_NEW_BAND, REMOVE_BAND } from './types'

const INITIAL_STATE: HomeState = {
  listOfBands: [] as Band[]
}

export default (state: HomeState = INITIAL_STATE, { payload, type }: AnyAction): HomeState => {
  switch (type) {
    case CREATE_NEW_BAND:
      return {
        ...state,
        listOfBands: [...state.listOfBands, payload]
      };
    case REMOVE_BAND:
      const newListOfBands = state.listOfBands.filter(item => item.id !== payload);
      return { 
        ...state,
        listOfBands: newListOfBands
      }
    default:
      return state;
  }
};