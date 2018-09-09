// Programmed by Blaise Saunders
// s3561722 - s3561722@student.rmit.edu.au
// Last updated 09/09/2018

// Mocha Unit Tester
const assert = require('assert');

const facebookLogin = (name, data) => {
    data.name = name;
    data.loggedIn = true;
}

const googleLogin = (name, data) => {
    data.name = name;
    data.loggedIn = true;
}


describe('Login Functionality', function () {

  it(`logs into Facebook`, function() {
    var data = {
      loggedIn: false,
      name: "",
    };

    var name = "David";

    facebookLogin(name, data);

    assert.equal(data.loggedIn, true)
    assert.equal(data.name, name)

  })


  it(`logs into Google`, function() {
    var data = {
      loggedIn: false,
      name: "",
    };

    var name = "David";

    facebookLogin(name, data);

    assert.equal(data.loggedIn, true)
    assert.equal(data.name, name)

  })



})
