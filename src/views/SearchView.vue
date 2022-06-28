<template>
  <div class="flex flex-wrap items-center text-black ">
    <div>
        <h1 class="text-xl ">Search</h1>
        <h2 class="text-lg">Search term: "{{ query }}"</h2>
    </div>
    </div>

    <div class="">
        <ProductBox
        v-for="product in products"
        :key="product.id"
        :product="product"/>
    </div>
    

</template>

<script>
import axios from 'axios'
import ProductBox from '../components/ProductBox.vue'

export default {
    name: 'Search',

    components: {
        ProductBox
    },

    data(){
        return {
            products: [],
            query: ''
        }
    },

    mounted(){
        document.title = 'Search | Food'

        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)

        if (params.get('query')){
            this.query = params.get('query')
            this.performSearch()
        }
    },

    methods: {
        async performSearch(){
            this.$store.commit('setIsLoading', true)

            await axios
                .post('/api/v1/products/search/', {'query': this.query})
                .then(response => {
                    this.products = response.data
                })
                .catch(error=> {
                    console.log(error)
                })

            this.$store.commit('setIsLoading', true)

        }
    }

}
</script>

<style>

</style>