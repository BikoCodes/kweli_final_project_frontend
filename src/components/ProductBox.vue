<template>
  
        <div
          class="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
        >
          <div class="block overflow-hidden">
            <img
              :src="product.get_thumbnail"
              alt=""
              class="rounded-lg hover:scale-105 hover:rotate-1 transition-transform h-72 w-full object-cover"
            />
          </div>
          <div class="p-4">
            <h1 class="text-lg">
              {{ product.name }}
            </h1>
            <h3 class="text-sm">
                <button>
                  <router-link :to="product.get_absolute_url" class="mt-4" >
                    View Details
                  </router-link>
                </button>
              
            </h3>
            <h5 class="font-bold">Ksh.{{ product.price }}</h5>
          </div>
          <div class="flex justify-between py-3 px-4">
            <button
              class="w-10 h-10 rounded-full border border-1 border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800 transition-colors"
              @click="addToWatchlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button class="btn-primary" @click="Cart(product)">Add to Cart</button>
          </div>
        </div>

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
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ProductBox',

    props: {
        product: Object
    },

    data(){
      return {
        cartItems: [],
        notification: {
            show: false,
            message: null
        },
          timeout: null,
          watchlistCount: 0,
      }
    },
  
    methods: {

      ...mapActions(['addToCart']),

      Cart(item) {
          
          item.quantity = 1;

          this.addToCart(item)
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

    },

}
</script>