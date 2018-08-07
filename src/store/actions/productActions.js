import { FETCH_PRODUCTS } from './types';
import axios from 'axios';


const productsAPI = "http://127.0.0.1:8001/api/products";


const compare = {
  'lowestprice': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchProducts = (filters, sortBy, callback) => dispatch => {

  axios.get(productsAPI)
    .then(res => {
      let { products } = res.data;
      let genderFilters = [];

      //Extract gender filters from filters array
      if (!!filters && filters.length > 0) {
          let mFilter = filters.indexOf('Male');
          if (mFilter > -1) {
              filters.splice(mFilter, 1);
              genderFilters.push('Male');
          }
          let fFilter = filters.indexOf('Female');
          if (fFilter > -1) {
              filters.splice(fFilter, 1);
              genderFilters.push('Female');
          }
      }

      //Re-check array length and apply size filters
      if(!!filters && filters.length > 0) {
        products = products.filter( p => filters.find( f => p.availableSizes.find( size => size === f ) ) )

      }

      //Apply gender filters (in glorious ES5)
      if (genderFilters.length > 0) {
          products = products.filter(function (p) {
              return genderFilters.find(function (f) {
                  return p.availableGenders.find(function(gender) {
                      return (gender == f);
                  })
              })
          });
      }


      if(!!sortBy){
        products = products.sort(compare[sortBy]);
      }

      if(!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Could not fetch products. Try again later.');
    });
}
