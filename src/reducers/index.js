import { SELECT_MODE } from '../actions';
import { combineReducers } from 'redux';

const selectedMode = (state = 'departures', action) => {
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

