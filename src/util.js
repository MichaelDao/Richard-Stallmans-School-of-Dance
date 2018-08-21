import {UPDATE_CURRENCY} from './store/actions/types';

const formatPrice = (x, currency) => {
    //console.log(currencyID);// debug
    UPDATE_CURRENCY.state.curren
    console.log(currency + x);// debug
    let newBal;
    switch (currency) {

        case 'AUD':
            newBal = x * 1.30;
            return newBal.toFixed(2);

        case 'YUAN':
            newBal = x * 1.30;
            return newBal.toFixed(2);

        default:
            return x.toFixed(2);
    }
};

export default {
    formatPrice,
}
