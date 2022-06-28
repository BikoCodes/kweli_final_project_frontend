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

      </div>
    </main>

</template>

<script>
import axios from 'axios'
import ProductBox from './ProductBox.vue'

export default {
    name: "Category",

    components: {
        ProductBox
    },

    data(){
        return {
            category: {
                products: []
            }
        }
    },

    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug
            console.log('here', categorySlug)
            this.$store.commit('setIsLoading', true)

            axios
                .get(`/api/v1/products/${categorySlug}/`)
                .then(response => {
                    this.category = response.data

                    document.title = this.category.name + ' | Food'
                })
                .catch(error => {
                    console.log(error)
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