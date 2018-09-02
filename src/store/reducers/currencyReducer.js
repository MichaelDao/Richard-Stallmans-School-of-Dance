import {UPDATE_CURRENCY} from '../actions/types';

const initialState = {
    item: 'AUD',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENCY:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}