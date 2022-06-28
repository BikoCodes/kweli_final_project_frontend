<template>
   <div
    class="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100"
    
  >
    <Navbar/>
    <div>
      <div :class="{'is-loading': $store.state.isLoading }"></div>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data(){
    return {
      cart: {
        items: []
      }
    }
  },

  beforeCreate(){
    this.$store.commit('INITIALIZE_STORE')

    const token = this.$store.state.token

    if(token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },

  mounted(){
    this.cart = this.$store.state.cart
  }
}
</script>