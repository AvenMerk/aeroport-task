import { SELECT_MODE } from '../actions';

const selectedMode = (state = 'departures', action) => {
    switch (action.type) {
        case SELECT_MODE:
            return action.mode;
        default:
            return state;
    }
};

