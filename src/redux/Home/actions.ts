import {
  CREATE_NEW_BAND,
  REMOVE_BAND
} from './types';

export interface HomeState {
  listOfBands: Band[];
};

export interface Band {
  id: string;
  name: string;
  biography: string;
  genrer: string;
  plays: string;
};

export interface createNewBand { 
  type: typeof CREATE_NEW_BAND;
  payload: Band;
};

export interface removeBand {
  type: typeof REMOVE_BAND;
  payload: string;
};

export type HomeActions = [createNewBand, removeBand];