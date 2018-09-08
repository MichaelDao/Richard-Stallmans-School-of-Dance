// Mocha Unit Tester
const assert = require('assert')

/*
 * Utility function which applies
 * the appropriate currency sign,
 * depending on the selected
 * localisation.
 */
function currencySymbol(currencyType) {
  if (currencyType === 'YUAN') {
    return '¥'
  }
  else {
    return '$'
  }
}

// Currency Localization Unit Tests
describe('Currency Localization', function() {
  it(`should return '¥' when the localized currency is 'YUAN'`, function() {
    assert.equal(currencySymbol('YUAN'), '¥')
  })

  it(`should return '$' when the localized currency is 'AUD'`, function() {
    assert.equal(currencySymbol('AUD'), '$')
  })

  it(`should return '$' when the localized currency is 'USD'`, function() {
    assert.equal(currencySymbol('USD'), '$')
  })
})
