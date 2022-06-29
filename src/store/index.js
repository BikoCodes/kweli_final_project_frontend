import axios from 'axios'

import { createStore } from 'vuex'

export default createStore({
  state: {
    
    cart: {
      items: [],
    },
    products:[],
    cartItemCount: 0,
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  
  mutations: {
    
    INITIALIZE_STORE(state){

      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }

      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
          state.token = ''
          state.isAuthenticated = false
      }
    },

    ADD_TO_CART(state, item){
      this.cartItemCount++;
      const exist = state.cart.items.filter(i => i.id === item.id)
      console.log(exist)
      if(exist.length){
        exist[0].quantity = parseInt(exist[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    setIsLoading(state, status){
      state.isLoading = status
    },

    SET_TOKEN(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
      
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },

    SET_CATEGORIES(state, products) {
      state.products = products;
    },

    removeFromCart(state, product) {
      state.cart.items = state.cart.items.filter(i => i.id !== product.id)
    }

  },

  actions: {

    addToCart({commit}, item){
      console.log(`store: addToCart ${item}`)
      commit('ADD_TO_CART',item)
    },
    async fetchCategory({commit}, categorySlug) {
      console.log('here', categorySlug)
      commit('setIsLoading', true)

      axios
          .get(`/api/v1/products/${categorySlug}/`)
          .then(response => {
              commit("SET_CATEGORIES", response.data)
          })
          .catch(error => {
              console.log(error)
          })
      
      commit('setIsLoading', false)
  }
  },

  getters: {
    getCartItems: state => {
      return state.cart.items;
    },

    cartTotalPrice: state => {
      let total = 0.0
      state.cart.items.forEach( (record) => {
        total += record.price * record.quantity
      })
      return total;
    },
    getCategories: state => {
      console.log(state.products)
      return state.products;
    },
  },

  modules: {
  }
})
