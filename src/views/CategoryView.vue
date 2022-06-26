<template>
    <div>
        <h2>{{ category.name }}</h2>
    </div>
  
</template>

<script>
import axios from 'axios'
export default {
    name: "Category",

    data(){
        return {
            Category: {
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
    }


}
</script>