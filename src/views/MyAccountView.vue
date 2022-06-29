<template>
    <div>
        <h1 class="text-xl">My account</h1>
    </div>

    <div>
        <h3>My orders</h3>
        
        <OrderSummary 
            v-for="order in orders"
            :key="order.id"
            :order="order"
            />
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