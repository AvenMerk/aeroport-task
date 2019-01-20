import {DEPARTURES} from "../containers/searchContainer";
import arrivals from '../data/arrivals.json';
import departures from '../data/departures.json';

export const SELECT_MODE = 'SELECT_MODE';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const SELECT_DELAYED = 'SELECT_DELAYED';

export const selectMode = mode => {
    return {
        type: SELECT_MODE,
        mode
    }
};

export const selectDelayed = delayed => {
  return {
      type: SELECT_DELAYED,
      delayed
  }
};

export const fetchFlights = mode => {
  return {
      type: FETCH_FLIGHTS,
      data: mode === DEPARTURES ? departures : arrivals,
  }
};

