<template>
    
    <main class="p-5">
        <div class="grid gap-8 grig-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5" >
            <div>
                <h2 class="flex items-center">{{ category.name }}</h2>
            </div>

        <ProductBox 
            v-for="product in category.products"
            :key="product.id"
            :product="product"/>

        <!-- <div
          class="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
          v-for="product in category.products" :key="product.id"
        >
          <a href="/src/product.html" class="block overflow-hidden">
            <img
              :src="product.get_thumbnail"
              alt=""
              class="rounded-lg hover:scale-105 hover:rotate-1 transition-transform"
            />
          </a>
          <div class="p-4">
            <h1 class="text-lg">
              {{ product.name }}
            </h1>
             <h5 class="font-bold">${{ product.price }}</h5>
            <h3 class="text-sm">
                <button>
                  <router-link :to="product.get_absolute_url" class="mt-4" >
                    View Details
                  </router-link>
                </button>
            </h3>
           
          </div>
        </div> -->

      </div>
    </main>

</template>

<script>
import axios from 'axios'
import ProductBox from './ProductBox.vue'

export default {
    name: "Category",

    data(){
        return {
            category: {
                products: []
            }
        }
    },

    methods: {
        async getCategory() {
            const category_slug = this.$route.params.category_slug

            this.$store.commit('setIsLoading', true)

            axios
                .get(`/api/v1/products/${categorySlug}/`)
                .then(response => {
                    this.Category = response.data

                    document.title = this.category.name + ' | Food'
                })
                .catch(error => {
                    console.log
                })
            
            this.$store.commit('setIsLoading', false)
        }
    },

    mounted(){
        this.getCategory()
    },

    watch: {
        $route(to,from){
            if (to.name === 'Category'){
                this.getCategory()
            }
        }
    }


}
</script>