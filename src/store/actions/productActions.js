import { FETCH_PRODUCTS } from "./types";
import axios from "axios";

const productsAPI = "http://localhost:4200/products";

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const searchProducts = searchText => dispatch => {
  var a = 0;
  axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;
      var ProductFiltered = [];
      if (products.length > 0) {
        for (var product of products) {
          if (product.title.toUpperCase().includes(searchText.toUpperCase())) {
            ProductFiltered.push(product);
          }
        }
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: { products: ProductFiltered, totalActual: products.length }
      });
    })
    .catch(err => {
      console.log("Could not fetch products. Try again later." + err);
      //throw new Error();
    });
};

export const fetchProducts = (
  filters,
  sortBy,
  pagination,
  callback
) => dispatch => {
  axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;
      let total = products.length;
      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!pagination) {
        const { currentPage, perPage } = pagination;
        const indexOfLastTodo = currentPage * perPage;
        const indexOfFirstTodo = indexOfLastTodo - perPage;
        products = products.slice(indexOfFirstTodo, indexOfLastTodo);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: { products: products, totalActual: total }
      });
    })
    .catch(err => {
      console.log("Could not fetch products. Try again later." + err);
      //throw new Error();
    });
};
