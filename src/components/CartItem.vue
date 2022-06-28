<template>

    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <router-link :to="item.get_absolute_url">{{ initialItem.name }}</router-link>
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Ksh.{{ initialItem.price }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ item.quantity }}
            <a @click="decrementQuantity(item)">-</a>
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Ksh{{ getItemTotal(item).toFixed(2) }}
        </td>
        <td>
            <button class="delete text-purple-600 hover:text-purple-500"
                @click="removeFromCart(item)">Remove</button>
        </td>
    </tr>
  
</template>

<script>
export default {
    name: "CartItem",
    
    props: {
        initialItem: Object
    },


    data(){
        return {
            item: this.initialItem
        }
    },

    methods: {
        getItemTotal(item){
            console.log('AND THIS IS THE TOTAL', this.initialItem)
            return item.quantity * this.initialItem.price
        },

        decrementQuantity(item) {
            item.quantity -= 1
            if (item.quantity === 0) {
                this.$emit('removeFromCart', item)
            }
            this.updateCart()
        },

        incrementQuantity(item) {
            item.quantity += 1
            this.updateCart()
        },

        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        },

        removeFromCart(item) {
            this.$emit('removeFromCart', item)
            this.updateCart()
        },
    }
}
</script>
