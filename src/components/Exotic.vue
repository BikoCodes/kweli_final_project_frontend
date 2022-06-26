<template>
    <div>
        <div class="text-center bg-gray-50 text-gray-800 py-24 px-6">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best offer for your health <br />
                <span class="text-blue-600">
                    Exotic Dishes
                </span>
            </h1>
        </div>
    </div>

    <ProductBox 
        v-for="product in latestProducts"
        :key="product.id"
        :product="product"/>

    <div
      class="fixed flex justify-between items-center left-1/2 top-16 -translate-x-1/2 z-40 shadow-xl bg-green-600 text-white py-3 px-4 rounded"
      x-show="notification.show"
      style="display: none"
    >
      <span x-text="notification.message"></span>
      <button
        class="w-6 h-6 ml-4 flex justify-center items-center rounded-full transition-colors hover:bg-black/20"
        @click="notification.show = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    
</template>

<script>
import axios from 'axios'
import ProductBox from './ProductBox.vue'

export default {
    name: "Exotic",

    components: {
        ProductBox
    },

    data(){
        return {
            latestProducts: [],
            cartItems: [],
            cartItemCount: 0,
            notification: {
                show: false,
                message: null
            },
            timeout: null,
            watchlistCount: 0,
        }
    },

    mounted(){
      this.getLatestProducts()

      document.title = 'Exotic | Food'
    },

    methods: {
        
        addToCart() {
            this.cartItemCount++;
            this.showNotification(`The Item was successfully added into your cart`)
        },

        addToWatchlist() {
            this.watchlistCount++;
            this.showNotification(`The Item was successfully added in your watchlist`)
        },

        showNotification(message) {
            this.notification.show = true;
            this.notification.message = message;
            alert(this.notification.message)
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.notification.show = false;
            }, 3000)
        },

        async getLatestProducts(){
           this.$store.commit('setIsLoading', true)

          await axios
              .get('/api/v1/latest-products/')
              .then(response => {
                this.latestProducts = response.data
              })
              .catch(error => {
                console.log(error)
              })

            this.$store.commit('setIsLoading', false)

            
        }

    },


      
}
</script>
