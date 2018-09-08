// React & React State Management (Redux)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/*
 * Utility function which can be used
 * to format and localise the coupon
 * price adjustment, depending on
 * the selected local currency.
 */
import util from '../util';

/*
 * Coupon React Component
 *
 * Allows the shopper to apply
 * a discount coupon to their
 * shopping cart - which will
 * reduce the overall total
 * price by 25%.
 */
class Coupon extends Component {
  constructor(props, context) {
    super(props, context)

    // Initialize our components' state
    this.originalPrice = 0
    this.textColour = 'black'
    this.couponCode = ''
  }

  /*
  * 'Apply' Button Event Handler
  *
  * Validates the entered coupon,
  * and if valid adjusts the total
  * checkout price by -25%.
  */
  applyCoupon(event) {
    // The original price (Discount not applied)
    this.originalPrice = this.props.cartTotals.totalPrice

    // The user inputted coupon code
    this.couponCode = document.getElementById('coupon').value

    /*
     * Localize the original total price via
     * a currency conversion calculation.
     */
    const formattedPrice = util.formatPrice(this.originalPrice, this.props.currencyType)

    // Calculate the discount amount
    const discount = (formattedPrice * 0.25).toFixed(2)

    // Apply the discounted amount to the original total
    const discountedPrice = (formattedPrice - discount).toFixed(2)

    /*
     * Validate whether the user entered coupon
     * is a valid coupon, if so apply a green
     * colour styling to the coupon and modify
     * the shopping cart total.
     */
    if (this.isValidCoupon(this.couponCode)) {
      /*
      * We colour valid coupons green
      * to signify to the user that
      * their coupon input was valid.
      */
      this.textColour = 'green'

      // Fetch the localized currency symbol
      const symbol = this.currencySymbol(this.props.currencyType)

      /*
       * Update the coupon components
       * detailed summary of the coupon
       * calculations, so that the user
       * knows exactly:
       *  - how much the original total price was
       *  - how much was saved via applying the coupon
       *  - the new total cart price
       */
      this.original = `${symbol} ${formattedPrice}`
      this.discount = `25% off (-${symbol} ${discount})`
      this.newTotal = `${symbol} ${discountedPrice}`

      // Update the carts total price accordingly
      document.getElementById('totalPrice').innerHTML = `${this.newTotal}`
    }
    else {
      /*
       * To signify to the user that they
       * have entered an invalid coupon
       * the entered input field will
       * become coloured red.
       */
      this.textColour = 'red'
    }

    /*
     * Force a component redraw
     * to work around the original
     * authors buggy state management.
     */
    this.forceUpdate()
  }

  /*
   * The visual representaion
   * of the coupon component.
   */
  render() {
    /*
     * Simple check whether the currently
     * entered coupon is valid or not.
     */
    const validCoupon = (this.textColour === 'green')

    return (
      <div id="coupon-container" style={{color: 'gold'}}>
        <h2>Coupon</h2>
        <p>Apply a coupon to save some cash</p>
        <input style={{color: this.textColour}} id="coupon" type={'text'} />
        {/* Bind the applyCoupon() event handler to the 'Apply' button click event */}
        <button onClick={this.applyCoupon.bind(this)}>Apply</button>
        {/* Render the coupon calculation details only on valid coupon entries */}
        { validCoupon ? <p class="coupon-calc"><span>Original: </span> {this.original}</p> : null}
        { validCoupon ? <p class="coupon-calc"><span>Discount: </span>{this.discount}</p> : null}
        { validCoupon ? <p class="coupon-calc"><span>New Total: </span>{this.newTotal}</p> : null}
      </div>
    );
  }

  /*
   * Utility function which applies
   * the appropriate currency sign,
   * depending on the selected
   * localisation.
   */
  currencySymbol(currencyType) {
      if (currencyType === 'YUAN') {
          return '¥';
      }
      else {
          return '$';
      }
  }

  /*
   * The Coupon Validator
   *
   * If the user inputted coupon
   * does not match one of the
   * four availible coupons it
   * is marked as invalid.
   */
  isValidCoupon(coupon) {
    return ['RMIT', 'CSIT', 'SEPT', 'HOMY'].includes(coupon)
  }
}

// Prop Type Definitions
Coupon.propTypes = {
  currencyType: PropTypes.string,
};

/*
 * Bind the components state
 * to the following Redux states.
*/
const mapStateToProps = state => ({
  cartTotals: state.cartTotals.item,

});

// Connect the state bindings to the component
export default connect(mapStateToProps)(Coupon);
