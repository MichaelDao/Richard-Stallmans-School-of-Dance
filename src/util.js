import {connect} from 'react-redux';

const formatPrice = (x, currencyID) => {
    //console.log(this.props.currencyType);// debug

    let newBal;
    switch (currencyID) {
        case 'AUD':
            newBal = x * 1.30;
            return newBal.toFixed(2);

        case 'YUAN':
            newBal = x * 200;
            return newBal.toFixed(2);

            // assumes USD
        default:
            return x.toFixed(2);
    }
};

export default {
    formatPrice,
}


const mapStateToProps = state => ({
    currencyType: state.currencyType.item,
})

connect(mapStateToProps)(formatPrice);
