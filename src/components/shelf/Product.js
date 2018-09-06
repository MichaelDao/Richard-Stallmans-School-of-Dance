import React from 'react';
import PropTypes from "prop-types";

import Thumb from '../Thumb';

import StarRating from '../StarRating';

import util from '../../util';

const Product = (props) => {
    const product = props.product;

    // Define the currency conversion -- michael
    const currency = props.currencyType;

    const currencySymbol = (id) => {
        if (id === 'YUAN') {
            return '¥';
        }
        else {
            return '$';
        }
    };

    // An input component may change the quantity in the future
    // Um componente de input pode alterar a quantidade no futuro
    product.quantity = 1;

    // 1.37 Australian Dollar == 1 US Dollar (this is a retarded way sorry lol)
    let formattedPrice = util.formatPrice(product.price, currency);

    let productInstallment;

    if (product.installments) {
        //const installmentPrice = (product.price / product.installments);

        productInstallment = (
            <div className="installment">
                <span>or {product.installments}
                    </span><b> {currencySymbol(currency)} {formattedPrice}</b>
            </div>
        );
    }

    //FIXME Defualt Star Rating set to 4 for TESTING
    return (
        <div className="shelf-item" data-sku={product.sku}>
            {product.isFreeShipping &&
            <div className="shelf-stopper">Free shipping</div>
            }

            <Thumb
                classes="shelf-item__thumb"
                src={require(`../../static/products/${product.sku}_1.jpg`)}
                alt={product.title}
            />

            <p className="shelf-item__title">{product.title}</p>
            <StarRating productId={product.id} productRating={4} />
            <p className="shelf-item__description">{product.description}</p>
            <div className="shelf-item__price">
                <div className="val">
                    {/* This is the symbol */}
                    <a>{currencySymbol(currency)}</a>
                    {/* Individual price */}
                    <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                    {/* bulk price */}
                    <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                </div>
                {productInstallment}
            </div>
            <div onClick={() => props.addProduct(product)} className="shelf-item__buy-btn">Add to cart</div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
};

export default Product;
