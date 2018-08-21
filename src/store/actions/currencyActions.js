import {UPDATE_CURRENCY} from './types';

export const updateCurrency = (currency) => dispatch => {

    dispatch({
        type: UPDATE_CURRENCY,
        payload: currency,
    });
}
