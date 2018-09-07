import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import util from '../util';

class Coupon extends Component {
  constructor(props, context) {
    super(props, context)

    this.originalPrice = 0
    this.couponCode = ''

    this.textColour = 'black'
  }

  applyCoupon(event) {
    this.originalPrice = this.props.cartTotals.totalPrice
    this.couponCode = document.getElementById('coupon').value

    if (this.isValidCoupon(this.couponCode)) {
      this.textColour = 'green'

      const symbol = this.currencySymbol(this.props.currencyType)
      const discount = ((util.formatPrice(this.originalPrice, this.props.currencyType)) * 0.25).toFixed(2)

      this.original = `${symbol} ${util.formatPrice(this.originalPrice, this.props.currencyType)}`
      this.discount = `25% off (-${symbol} ${discount})`
      this.newTotal = `${symbol} ${(util.formatPrice(this.originalPrice, this.props.currencyType) - discount).toFixed(2)}`

      document.getElementById('totalPrice').innerHTML = symbol + " " + (util.formatPrice(this.originalPrice, this.props.currencyType) - discount).toFixed(2)

    }
    else {
      this.textColour = 'red'
    }

    this.forceUpdate()
  }

  render() {
    let currencyType = this.props.currencyType
    let totalPrice = this.props.cartTotals.totalPrice;

    return (
      <div style={{color: 'gold'}}>
        <h2>Coupon</h2>
        <p>Apply a coupon to save some cash</p>
        <input style={{color: this.textColour}} id="coupon" type={'text'} />
        <button onClick={this.applyCoupon.bind(this)}>Apply</button>
        { this.textColour === 'green' ? <p>Original: {this.original}</p> : null}
        { this.textColour === 'green' ? <p>Discount: {this.discount}</p> : null}
        { this.textColour === 'green' ? <p>New Total: {this.newTotal}</p> : null}
      </div>
    );
  }

  currencySymbol(currencyType) {
      if (currencyType === 'YUAN') {
          return '¥';
      }
      else {
          return '$';
      }
  }

  isValidCoupon(coupon) {
    return ['RMIT', 'CSIT', 'SEPT', 'HOMI'].includes(coupon)
  }
}

// {totalPrice}{currencyType}{this.status}

Coupon.propTypes = {
  currencyType: PropTypes.string,
};

const mapStateToProps = state => ({
  cartTotals: state.cartTotals.item,

});

export default connect(mapStateToProps)(Coupon);
