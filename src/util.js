/*
 * Utility function which can be used
 * to format and localise the coupon
 * price adjustment, depending on
 * the selected local currency.
 */
const formatPrice = (x, currencyID) => {
    let newBal;
    switch (currencyID) {
        case 'AUD':
            newBal = x * 1.30;
            return newBal.toFixed(2);

        case 'YUAN':
            newBal = x * 6.8;
            return newBal.toFixed(2);

        // Assume USD
        default:
            return x.toFixed(2);
    }
};

export default {
    formatPrice
}
