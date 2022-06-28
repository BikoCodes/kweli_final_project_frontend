<template>
    <div>
        <div class="text-center text-gray-800 py-4 px-6">
            <h1 class="text-3xl  font-medium group">
                The best offer for your health <br />
            </h1>
        </div>
    </div>

    <main class="p-5">
        <div class="grid gap-4 grid-cols-12 lg:grid-cols-3  p-5" >
             <ProductBox 
                v-for="product in latestProducts"
                :key="product.id"
                :product="product"/>
        </div>
    </main>
   
    
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
            latestProducts: []
            
        }
    },

    mounted(){
      this.getLatestProducts()

      document.title = 'Exotic | Food'
    },

    methods: {
        
        
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
