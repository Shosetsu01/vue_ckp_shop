let basket = window.localStorage.getItem('basket');

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
   state: {
      products: [],
      basket: basket ? JSON.parse(basket) : []
   },
   mutations: {
      SET_PRODUCTS_TO_STATE: (state, products) => {
         state.products = products;
         if (state.basket.length) {
            for (let i = 0; i < state.products.length; i++) {
               console.log('basket CHANGE')
               let isProductExists = false;
               state.basket.map(function (item) {
                  if (products[i].id === item.id) {
                     isProductExists = true;
                     products[i].quantity = item.quantity;
                  }
                  if (!isProductExists){
                     products[i].quantity = 0;
                  }
               })
            }
         } else {
            return 0;
         }
      },
      SET_BASKET: (state, product) => {
         if (state.basket.length) {
            let isProductExists = false;
            state.basket.map(function (item) {
               if (item.id === product.id) {
                  isProductExists = true;
                  item.quantity++;
                  Vue.set(product, 'quantity', item.quantity);
               }
            })
            if (!isProductExists) {
               state.basket.push(product);
               Vue.set(product, 'quantity', 1);
            }
         } else {
            state.basket.push(product);
            Vue.set(product, 'quantity', 1);
         }
      },
      SAVE_BASKET: (state) => {
         window.localStorage.setItem('basket', JSON.stringify(state.basket));
      },
      REMOVE_FROM_BASKET: (state, index) => {
         state.basket.splice(index, 1);
      },
      INCREMENT: (state, index) => {
         state.basket[index].quantity++
      },
      DECREMENT: (state, index) => {
         if (state.basket[index].quantity > 1) {
            state.basket[index].quantity--
         }
      },
   },
   actions: {
      GET_PRODUCTS_FROM_API({commit}, products) {
         commit('SET_PRODUCTS_TO_STATE', products);
         return products;
      },
      ADD_TO_BASKET({commit}, product) {
         commit('SET_BASKET', product);
         commit('SAVE_BASKET');
      },
      INCREMENT_BASKET_ITEM({commit}, index) {
         commit('INCREMENT', index);
         commit('SAVE_BASKET');
      },
      DECREMENT_BASKET_ITEM({commit}, index) {
         commit('DECREMENT', index);
         commit('SAVE_BASKET');
      },
      DELETE_FROM_BASKET({commit}, index) {
         commit('REMOVE_FROM_BASKET', index);
         commit('SAVE_BASKET');
      },
   },
   getters: {
      PRODUCTS(state) {
         return state.products;
      },
      BASKET(state) {
         return state.basket;
      }
   },
});

export default store;