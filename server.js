const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

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
    res.json({'test' : 'Test response'});
});

// Items sold
app.post('/sale', function (req, res) {

    fs.readFile('data/sales.json', 'utf8', function (err, data) {
        if (err) throw err;
        products = JSON.parse(data).sales;
        let sales = req.body;
        console.log('Sales length ' + sales.length);
        for (let i = 0; i < sales.length; i++) {
            let sale = sales[i];
            console.log('(id: ' + sale.id + ', quantity: ' + sale.quantity + ')');
            let productFound = false;
            for (let j = 0; j < products.length; j++) {
                if (products[j].id == sale.id) {
                    products[j].sells += sale.quantity;
                    productFound = true;
                    break;
                }
            }

            if (!productFound) products.push({'id' : sale.id, 'sells' : sale.quantity});
        }

        fs.writeFile('data/sales.json', JSON.stringify({sales: products}, null, 2), 'utf8', function(werr) {
            if (werr) throw werr;
            res.json({'test' : 'Test sale response'});
        });
    });
});

// Get reccomendations for user
app.post('/reccomend', function (req, res) {
    console.log('API Called for Recommendation');
    fs.readFile('data/sales.json', 'utf8', function (err, data) {
        if (err) throw err;
        sales = JSON.parse(data).sales;
        let mostPopular = null;
        let secondPopular = null;
        for (let i = 0; i < sales.length; i++) {
            if (!mostPopular) mostPopular = sales[i];
            if (mostPopular.quantity < sales[i].quantity) {
                secondPopular = mostPopular;
                mostPopular = sales[i];
            }
        }
        let reccomendation = (Math.random() < 0.5 ? mostPopular : secondPopular);
        if (!reccomendation) reccomendation = mostPopular;

        fs.readFile('data/products.json', 'utf8', function (err, pdata) {
            if (err) throw err;
            products = JSON.parse(pdata).products;
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == reccomendation.id) {
                    res.json(products[i]);
                    return;
                }
            }
        });
    });
});

// Product rating update
app.post('/rating', function (req, res) {
    let rating = req.body;
    let products = '...';

    fs.readFile('data/products.json', 'utf8', function (err, data) {
        if (err) throw err;
        products = JSON.parse(data).products;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == rating.productId) {
                products[i].rating = rating.productRating;
                console.log(products[i]);
                // Prettify the JSON Output
                fs.writeFile('data/products.json', JSON.stringify({products: products}, null, 2), 'utf8', function(werr) {
                    if (werr) throw werr;
                    res.json({'rating' : true});
                });
                break;
            }
        }
    });
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
