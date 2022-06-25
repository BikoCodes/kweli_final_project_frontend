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
    this.$store.commit('initializeStore')
  },

  mounted(){
    // this.cart = this.$store.state.cart
  }
}
</script>