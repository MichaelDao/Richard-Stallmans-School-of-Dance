const formatPrice = (x, currencyID) => {
    let newBal;
    switch (currencyID) {
        case 'AUD':
            newBal = x * 1.30;
            return newBal.toFixed(2);

        case 'YUAN':
            newBal = x * 6.8;
            return newBal.toFixed(2);

            // assumes USD
        default:
            return x.toFixed(2);
    }
};

export default {
    formatPrice,
}
