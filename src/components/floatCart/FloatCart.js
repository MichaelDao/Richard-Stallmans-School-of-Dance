import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {loadCart, removeProduct} from '../../store/actions/floatCartActions';
import {updateCart} from '../../store/actions/updateCartActions';

import CartProduct from './CartProduct';

import persistentCart from "../../persistentCart";

import util from '../../util';

import Paypal from '../Paypal';
import Coupon from '../Coupon';

class FloatCart extends Component {

    state = {
        isOpen: false,
    };

    componentWillMount() {
        this.props.loadCart(JSON.parse(persistentCart().get()) || []);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.updateCart(this.props.cartProducts);
        }, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newProduct !== this.props.newProduct) {
            this.addProduct(nextProps.newProduct);
        }

        if (nextProps.productToRemove !== this.props.productToRemove) {
            this.removeProduct(nextProps.productToRemove);
        }
    }

    openFloatCart = () => {
        this.setState({isOpen: true});
    }

    closeFloatCart = () => {
        this.setState({isOpen: false});
    }

    addProduct = (product) => {
        const {cartProducts, updateCart} = this.props;
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                cp.quantity += product.quantity;
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            cartProducts.push(product);
        }

        updateCart(cartProducts);
        this.openFloatCart();
    }

    removeProduct = (product) => {
        const {cartProducts, updateCart} = this.props;

        const index = cartProducts.findIndex(p => p.id === product.id);
        if (index >= 0) {
            cartProducts.splice(index, 1);
            updateCart(cartProducts);
        }
    }

    proceedToCheckout = () => {
        const {totalPrice, productQuantity, currencyFormat, currencyId} = this.props.cartTotals;

        if (!productQuantity) {

            alert("Add an item to the cart first!");
        } else {
            alert(`Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(totalPrice, currencyId)}`);
        }
    }

    render() {
        const {cartTotals, cartProducts, removeProduct, currencyType} = this.props;

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

        let classes = ['float-cart'];

        if (this.state.isOpen) {
            classes.push('float-cart--open');
        }

        const currencySymbol = (id) => {
            if (id === 'YUAN') {
                return '¥';
            }
            else {
                return '$';
            }
        };

        return (
            <div className={classes.join(' ')}>
                {/* If cart open, show close (x) button */}
                {this.state.isOpen && (
                    <div onClick={() => this.closeFloatCart()} className="float-cart__close-btn">
                        X
                    </div>
                )}

                {/* If cart is closed, show bag with quantity of product and open cart action */}
                {!this.state.isOpen && (
                    <span onClick={() => this.openFloatCart()} className="bag bag--float-cart-closed">
                        <span className="bag__quantity">{cartTotals.productQuantity}</span>
                    </span>
                )}

                <div className="float-cart__content">

                    <div className="float-cart__header">
                        <span className="bag">
                            <span className="bag__quantity">
                                {cartTotals.productQuantity}
                            </span>
                        </span>
                        <span className="header-title">Shopping Bag</span>
                    </div>

                    <div className="float-cart__shelf-container">
                        {products}
                        {!products.length && (
                            <p className="shelf-empty">
                                This is your shopping bag!<br/>
                            </p>
                        )}
                    </div>

                    <div className="float-cart__footer">
                        <div className="sub">SUBTOTAL</div>
                        <div className="sub-price">
                            <p id="totalPrice" className="sub-price__val">
                                {`${currencySymbol(currencyType)} ${util.formatPrice(cartTotals.totalPrice, currencyType)}`}
                            </p>
                            <small className="sub-price__installment">
                                {!!cartTotals.installments && (
                                    <span>{`OR UP TO ${cartTotals.installments} x ${currencySymbol(currencyType)} ${util.formatPrice(cartTotals.totalPrice / cartTotals.installments, currencyType)}`}</span>
                                )}
                            </small>
                        </div>

                        <Paypal products={cartProducts}/>
                        <Coupon currencyType={currencyType} />

                        {/*
                        <div onClick={() => this.proceedToCheckout()} className="buy-btn">
                            Checkout
                        </div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

FloatCart.propTypes = {
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

export default connect(mapStateToProps, {loadCart, updateCart, removeProduct})(FloatCart);
