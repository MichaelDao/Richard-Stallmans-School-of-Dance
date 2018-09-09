## 🛍️ RMIT University E-Commerce Shopping Cart
<p align="center">
  <img src="https://img.shields.io/badge/React-16.3.1-blue.svg">
  <img src="https://img.shields.io/badge/Redux-3.7.2-blue.svg?colorB=764abc">
  <img src="https://img.shields.io/badge/Nodejs-6.10.2-blue.svg?colorB=90c53f">
  <img src="https://img.shields.io/badge/Express-4.16.3-blue.svg?colorB=47535e">
  <br/>
  <img src="./rmit-shopping-cart.png">
</p>

## About

Software Engineering: Processes & Tools Major Assignment, special thanks to Jefferson Ribeiro for the
<a href="https://github.com/jeffersonRibeiro/react-shopping-cart">original project</a>.

#### Requirements

- Node.js
- NPM

### Installation

In the projects root directory execute
``` bash
npm install
```

### Running

Run the products API server
``` bash
npm run server
```

Run the react app
``` bash
npm run client
```

The website will be availible on `http://localhost:3000`
The products API server will be running on `http://localhost:8001/api/products`

### Testing

Unit tests were done using Mocha, to run them simply execute
``` bash
npm run test
```

#### Authors
- Michael Dao
- Blaise Saunders
- William Cohen
- Mitchell Maligeorges

### Tech Stack
- React
  * Redux - for application state management
  * Paypal Component
  * Google Login Componenet
  * Facebook Login Component
- Nodejs
  * Express CORS Middleware
  * Nodemon - for watching for server changes
  * Mocha - Unit Testing
- Axios - for promise HTTP requests
- Native local storage API - for product persistence in floating cart
- CSS
  * BEM methodology

### Copyright and license

The MIT License (MIT).
Please see License File for more information.
