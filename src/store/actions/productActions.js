import {FETCH_PRODUCTS} from './types';
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
            let {products} = res.data;

            let genderFilters = [];
            let sizeFilters = [];
            let colorFilters = [];

            let priceFilter = 100;

            //Extract gender filters from filters array
            // if (!!filters && filters.length > 0) {
            //     let mFilter = filters.indexOf('Male');
            //     if (mFilter > -1) {
            //         filters.splice(mFilter, 1);
            //         genderFilters.push('Male');
            //     }
            //     let fFilter = filters.indexOf('Female');
            //     if (fFilter > -1) {
            //         filters.splice(fFilter, 1);
            //         genderFilters.push('Female');
            //     }
            // }

            if (!!filters) {
                for (let i = 0; i < filters.length; i++) {
                    let filt = filters[i];
                    if (filt.substring(0, 2) === 'S_') {
                        sizeFilters.push(filt.substring(2));
                    } else if (filt.substring(0, 2) === 'C_') {
                        colorFilters.push(filt.substring(2));
                    } else if (filt.substring(0, 2) === 'G_') {
                        genderFilters.push(filt.substring(2));
                    } else if (filt.substring(0,2) == 'P_') {
                        priceFilter = Number(filt.substring(2));
                    }
                }
            }

            // console.log("SIZES");
            // console.log(sizeFilters);
            //
            // console.log("PRODUCTS");
            // console.log(products);

            //Re-check array length and apply size filters
            if (!!sizeFilters && sizeFilters.length > 0) {
                products = products.filter(p => sizeFilters.find(f => p.availableSizes.find(size => size === f)))

            }

            //Apply gender filters (in glorious ES5)
            if (!!genderFilters && genderFilters.length > 0) {
                products = products.filter(function (p) {
                    return genderFilters.find(function (f) {
                        return p.availableGenders.find(function (gender) {
                            return (gender === f);
                        })
                    })
                });
            }

            //Apply color filters
            if (!!colorFilters && colorFilters.length > 0) {
                products = products.filter(function (p) {
                    return colorFilters.find(function (f) {
                        return p.availableColors.find(function (color) {
                            return (color === f);
                        })
                    })
                });
            }

            //Apply price filter
            if (!!priceFilter && priceFilter < 100) {
                  products = products.filter(function (p) {
                      return (p.price < priceFilter);
                  });
            }

            if (!!sortBy) {
                products = products.sort(compare[sortBy]);
            }

            if (!!callback) {
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
};
