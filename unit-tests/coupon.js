// Mocha Unit Tester
const assert = require('assert')

/*
 * The Coupon Validator
 *
 * If the user inputted coupon
 * does not match one of the
 * four availible coupons it
 * is marked as invalid.
 */
function isValidCoupon(coupon) {
  return ['RMIT', 'CSIT', 'SEPT', 'HOMY'].includes(coupon)
}

// Coupon Validation Unit Tests
describe('Coupon Validation', function(){
  it(`should return 'true' when the entered coupon is 'RMIT'`, function() {
    assert.equal(isValidCoupon('RMIT'), true)
  })

  it(`should return 'true' when the entered coupon is 'CSIT'`, function() {
    assert.equal(isValidCoupon('CSIT'), true)
  })

  it(`should return 'true' when the entered coupon is 'SEPT'`, function() {
    assert.equal(isValidCoupon('RMIT'), true)
  })

  it(`should return 'true' when the entered coupon is 'HOMY'`, function() {
    assert.equal(isValidCoupon('RMIT'), true)
  })

  it(`should return 'false' when the entered coupon is invalid`, function() {
    assert.equal(isValidCoupon('kjhewifu'), false)
  })
})
