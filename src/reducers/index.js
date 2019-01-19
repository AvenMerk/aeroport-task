import { SELECT_MODE } from '../actions';
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

export default combineReducers({
    selectedMode,
})

