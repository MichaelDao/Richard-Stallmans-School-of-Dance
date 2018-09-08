// Mocha Unit Tester
const assert = require('assert')

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
          return newBal.toFixed(2)

      case 'YUAN':
          newBal = x * 6.8;
          return newBal.toFixed(2)

      // Assume USD
      default:
          return x.toFixed(2)
  }
}

// The default monetary unit input
const price = 5.00

// Currency Converter Unit Tests
describe('Currency Converter', function() {
  it(`converts the currency to 'AUD'`, function() {
    const convertedPrice = (price * 1.30).toFixed(2)

    assert.equal(formatPrice(price, 'AUD'), convertedPrice)
  })

  it(`converts the currency to 'YUAN'`, function() {
    const convertedPrice = (price * 6.8).toFixed(2)

    assert.equal(formatPrice(price, 'YUAN'), convertedPrice)
  })

  it(`converts the currency to 'USD' by default`, function() {
    const convertedPrice = price.toFixed(2)

    assert.equal(formatPrice(price), convertedPrice)
  })
})
