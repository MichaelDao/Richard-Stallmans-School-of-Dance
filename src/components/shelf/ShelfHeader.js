import React from 'react';
import PropTypes from 'prop-types';

import CurrencySelect from './CurrencySelect';
import Sort from './Sort';
import Clearfix from '../Clearfix';

import Popup from '../floatCart/CheckoutPopup';
import Paypal from '../Paypal';

const ShelfHeader = (props) => {

    return (
        <div className="shelf-container-header">
            <small className="products-found">
                <span>{props.productsLength} Product(s) found.</span>
            </small>
            <Sort/>
            <Popup/>
            <br/><br/>
            <CurrencySelect/>
            <Clearfix/>

        </div>
    );
}

ShelfHeader.propTypes = {
    productsLength: PropTypes.number.isRequired,
}

export default ShelfHeader;