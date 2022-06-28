import { createStore } from 'vuex'

export default createStore({
  state: {
    
    cart: {
      items: [],
    },
    cartItemCount: 0,
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  
  mutations: {
    
    initializeStore(state){
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

    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
      
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },

  },

  actions: {

    addToCart({commit}, item){
      console.log(`store: addToCart ${item}`)
      commit('ADD_TO_CART',item)
    }
  },

  getters: {
    getCartItems: state => {
      return state.cart.items;
    }
  },

  modules: {
  }
})
