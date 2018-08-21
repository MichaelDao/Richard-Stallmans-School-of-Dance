import {UPDATE_CURRENCY} from './types';

export const updateCurrency = (currencyID) => dispatch => {
    console.log("the action is " + currencyID); // actions stores my variable inside a store

    dispatch({
        type: UPDATE_CURRENCY,
        payload: currencyID,
    });
};
