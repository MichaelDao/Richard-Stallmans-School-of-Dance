// Mocha Unit Tester
const assert = require('assert')
const fetch = require('node-fetch');

const rating = {productId: 32, productRating: 5};
const sale = [{id: 32, quantity: 1}];

//Same as '../src/store/actions/apiActions'
function callApi(action, data, callback) {
    //https://api-dot-rmit-shoppingcart.appspot.com/
    fetch('https://api-dot-rmit-shoppingcart.appspot.com/' + action, {
        method: 'POST',
        body: JSON.stringify(data, null, 2), // Prettify the JSON output
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        return response.json();
    }).then(data => {
        callback(data);
    }).catch(err => {
        //console.error(err);
    });
}

function isValidJson(json) {
    try {
        JSON.parse(json);
        return true;
    } catch {
        return false;
    }
}

describe('Api Calls', function()
{
    it('Should return a sample test response JSON on \'test\' call', function()
    {
      callApi('test', {message: 'hello'}, function (res) {
          assert.equal(res.test, 'Test response');
          done();
      });
    });

    it('Should return a reccomendation on \'reccomend\' call', function()
    {
      callApi('reccomend', {}, function (res) {
          assert.equal(res.id, true);
          done();
      });
    });

    it('Should return a success on \'sale\' call', function()
    {
      callApi('sale', sale, function (res) {
          assert.equal(res, true);
          done();
      });
    });

    it('Should return a success on \'rating\' call', function()
    {
      callApi('rating', rating, function (res) {
          assert.equal(res.rating, true);
          done();
      });
    });

});
