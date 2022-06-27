<template>
    <div>
        <h1 class="text-xl">My account</h1>
    </div>

    <div>
        <button class="btn-danger" @click="logout()">Log out</button>
    </div>
  
</template>

<script>
import axios from 'axios'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
    name: 'MyAccountView',

    components: {
        OrderSummary
    },

    data() {
        return {
            orders: []
        }
    },

    mounted() {
        document.title = 'My account | Food'
        this.getMyOrders()
    },

    methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("email")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$router.push('/')
        },

        async getMyOrders() {
            this.$store.commit('setIsLoading', true)

            await axios
                .get('/api/v1/orders/')
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>

<style>

</style>