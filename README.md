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

## Resource Links

- <a href='https://trello.com/b/yA4fIALD/rmit-shopping-cart'>Trello</a>
- <a href='https://travis-ci.com/RMIT-SEPT/RichardStallman-sSchoolofDance/branches'>Travis</a>
- <a href='https://rmit-shoppingcart.appspot.com/'>Live Website (App Engine)</a>
- <a href='https://api-dot-rmit-shoppingcart.appspot.com/'>JSON Product API Server (App Engine)</a>

### Requirements

- Node.js
- NPM

### Installation

In the projects root directory execute
``` bash
npm install
```

### Running

Run the products API server at `http://localhost:8001/api/products`

Note: Not required anymore, as we have a live API server availble <a href='https://api-dot-rmit-shoppingcart.appspot.com/'>here</a>.
``` bash
npm run server
```

Run the react app at `http://localhost:3000`
``` bash
npm run client
```

- Valid Coupons: `HOMY`, `RMIT`, `SEPT`, `CSIT`
- Facebook & Google login works with real accounts
- Paypal Sandbox Account Details
  - Email: mifrent-buyer@hotmail.com
  - Password: 12345678

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
- Infrastructure
  * Google App Engine
  * Travis CI
- React
  * Redux - for application state management
  * Paypal Component
  * Google Login Componenet
  * Facebook Login Component
- Nodejs
  * Express CORS Middleware
  * Nodemon - for watching for server changes
  * Mocha - Unit Testing
  * Prettier - Opinionated code formatter
- Axios - for promise HTTP requests
- Native local storage API - for product persistence in floating cart
- CSS
  * BEM methodology

### Copyright and license

The MIT License (MIT).
Please see License File for more information.
