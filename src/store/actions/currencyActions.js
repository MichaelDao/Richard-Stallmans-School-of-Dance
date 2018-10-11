import {UPDATE_CURRENCY} from './types';

export const updateCurrency = (currencyType) => dispatch => {

    dispatch({
        type: UPDATE_CURRENCY,
        payload: currencyType,
    });
};
