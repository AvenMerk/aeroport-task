import { SELECT_MODE, FETCH_FLIGHTS, SELECT_DELAYED, SEARCH_FLIGHT } from '../actions';
import { combineReducers } from 'redux';
import { DEPARTURES } from '../containers/searchContainer';

const selectedMode = (state = DEPARTURES, action) => {
    switch (action.type) {
        case SELECT_MODE:
            return action.mode;
        default:
            return state;
    }
};

const selectedDelayed = (state = false, action) => {
    switch (action.type) {
        case SELECT_DELAYED:
            return action.delayed;
        default:
            return state;
    }
};

const flightsForMode = (state = {flightData: []}, action) => {
    switch (action.type) {
        case FETCH_FLIGHTS:
            return {
                ...state,
                flightData: action.data.FlightStatusResource.Flights.Flight,
            };
        default:
            return state;
    }
};

const searchedFlight = (state = {substring: ''}, action) => {
    switch (action.type) {
        case SEARCH_FLIGHT:
            return action.substring;
        default:
            return state;
    }
};

export default combineReducers({
    selectedMode,
    flightsForMode,
    selectedDelayed,
    searchedFlight,
})

