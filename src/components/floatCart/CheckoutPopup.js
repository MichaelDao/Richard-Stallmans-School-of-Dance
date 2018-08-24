import React, {Component} from 'react';
import Popup from "reactjs-popup";
import CartProduct from "./CartProduct";

import CurrencySelect from "../shelf/CurrencySelect";

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {loadCart} from '../../store/actions/floatCartActions';


import persistentCart from "../../persistentCart";

import util from '../../util';


class CheckoutPopup extends Component {
    render() {
        const {cartTotals, cartProducts, removeProduct, currencyType} = this.props;
        const {totalPrice, productQuantity, currencyFormat, currencyId} = this.props.cartTotals;

        const products = cartProducts.map(p => {
            return (
                <CartProduct
                    product={p}
                    removeProduct={removeProduct}
                    key={p.id}
                    currencyType={currencyType}
                />
            );
        });
        //{`Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(totalPrice, currencyId)}`}


        return (

            <Popup modal closeOnDocumentClick>


                <div className="float-cart__content ">


                    <div className="float-cart__shelf-container">
                        {products}
                       
                    </div>

                </div>

            </Popup>
        );
    }
}


CheckoutPopup.propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
    currencyType: PropTypes.string,
};


const mapStateToProps = state => ({
    cartProducts: state.cartProducts.items,
    newProduct: state.cartProducts.item,
    productToRemove: state.cartProducts.itemToRemove,
    cartTotals: state.cartTotals.item,
    currencyType: state.currencyType.item,
});


export default connect(mapStateToProps, {loadCart})(CheckoutPopup);

