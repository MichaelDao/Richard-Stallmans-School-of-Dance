const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Port for the API server
const serverPort = 8001;

// API Default routes
const routes = {
	products: {
		get: '/api/products'
	}
};

// Use CORS with express
app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Test ENGLISH
app.post('/test', function (req, res) {
    console.log(req.body);
    res.json({'rating' : 'Rating update success'});
});

// Serve product information
app.get(routes.products.get, function (req, res) {
    res.sendFile(__dirname + '/data/products.json');
});

//Redirect all get requests to serve product info
app.use('*', function (req, res) {
    res.redirect(routes.products.get);
});

// Listen on server port
app.listen(serverPort);
console.log(`[Server] API Server running on port: ${serverPort}.`);
