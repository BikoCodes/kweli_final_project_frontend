<template>
    <div class="flex ">
        <h1 class="title text-2xl">Checkout</h1>
    </div>

          <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full">
                        <thead class="bg-white border-b" >
                          <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Product
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Price
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Quantity
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Total
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                v-for="item in cart.items" :key="item.product.id">

                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item.product.name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Ksh.{{ item.product.price }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item.quantity }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Ksh.{{ getItemTotal(item).toFixed(2) }}
                                </td>
                            </tr>
                            <tfoot>
                                <tr>
                                    <td class="flex flex-col-2">Total</td>
                                    <td>{{ cartTotalLength }}</td>
                                    <td>Ksh. {{ cartTotalPrice.toFixed(2) }}</td>
                                </tr>
                            </tfoot>
                        </tbody>
                      </table>
                    </div>

                   <div>
                   
                    <main class="p-5">
                        <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
                            <div class="grid grid-cols-1 sm:grid-cols-5 items-start gap-6">
                                <div class="col-span-3 bg-white p-4 rounded-lg shadow">
                                    <div class="mb-6">
                                    <h2 class="text-xl mb-5">Shipping Details</h2>
                                    <h2 class="text-xl">* All fields are required</h2>
                        
                                    <div class="mb-4">
                                        <input
                                        placeholder="Your First Name"
                                        type="text"
                                        name="name"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                        v-model="first_name"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <input
                                        placeholder="Your Last Name"
                                        type="text"
                                        name="name"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                        v-model="last_name"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <input
                                        placeholder="Your Email"
                                        type="email"
                                        name="email"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                        v-model="email"
                                        />
                                    </div>
                                    
                                    <div class="mb-4">
                                        <input
                                        placeholder="Your Phone"
                                        type="text"
                                        name="phone"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                        v-model="phone"
                                        />
                                    </div>
                                    </div>

                                    <div class="mb-6">
                                    <h2 class="text-xl mb-5">Billing Address</h2>
                                    <div class="flex gap-3">
                                        <div class="mb-4 flex-1">
                                        <input
                                            placeholder="Address"
                                            type="text"
                                            name="billing_address_1"
                                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                            v-model="address"
                                        />
                                        </div>
                                        <div class="mb-4 flex-1">
                                        <input
                                            placeholder="Address 2"
                                            type="text"
                                            name="billing_address_2"
                                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                            v-model="address2"
                                        />
                                        </div>
                                    </div>
                                    
                                    <div class="flex gap-3">
                                        <div class="mb-4 flex-1">
                                        <select
                                            placeholder="County"
                                            type="text"
                                            name="billing_country"
                                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                            v-model="county"
                                        >
                                            <option value="">County</option>
                                            <option value="ge">Nairobi</option>
                                            <option value="de">Mombasa</option>
                                        </select>
                                        </div>
                                        <div class="mb-4 flex-1">
                                        <input
                                            placeholder="Postal Code"
                                            type="text"
                                            name="billing_zipcode"
                                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                            v-model="postalcode"
                                        />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                <div class="notification" v-if="errors.length">
                                    <p v-for="error in errors" :key="error">{{ error }}</p>
                                </div>

                                <hr>

                                <div id="darajacard" class="mb-5">

                                </div>
                                <template v-if="cartTotalLength">
                                    <hr>
                                    <button class="button is-dark" @click="submitForm">Pay with M-Pesa</button>
                                </template>

                            </div>
                        </div>
                    </main>
                   </div>
                  </div>
                </div>
              </div>
  
</template>

<script>
import axios from 'axios'

export default {
    name: 'CheckOutView',

    data() {
        return {
            cart: {
                items: []
            },
            daraja: {},
            card: {},
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            address2: '',
            county: '',
            postalcode: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'CheckOut | Food'

        this.cart = this.$store.state.cart

        if (this.cartTotalLength > 0) {
            this.mpesa = Mpesa('pk_test_51H1HiuKBJV2qfWbD2gQe6aqanfw6Eyul5PO2KeOuSRlUMuaV4TxEtaQyzr9DbLITSZweL7XjK3p74swcGYrE2qEX00Hz7GmhMI')
            
            const elements = this.mpesa.elements();

            this.card = elements.create('card', { hidePostalCode: true })
            this.card.mount('#card-element')
        }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        submitForm() {

            this.errors = []

            if (this.first_name === '') {
                this.errors.push('The first name field is missing!')
            }

            if (this.last_name === '') {
                this.errors.push('The last name field is missing!')
            }

            if (this.email === '') {
                this.errors.push('The email field is missing!')
            }

            if (this.phone === '') {
                this.errors.push('The phone field is missing!')
            }
            if (this.address === '') {
                this.errors.push('The address field is missing!')
            }
            
            if (this.postalcode === '') {
                this.errors.push('The postal-code field is missing!')
            }

            if (!this.errors.length) {
                this.$store.commit('setIsLoading', true)
                this.mpesa.createToken(this.card).then(result => {                    
                    if (result.error) {
                        this.$store.commit('setIsLoading', false)
                        this.errors.push('Something went wrong with Mpesa. Please try again')
                        console.log(result.error.message)
                    } else {
                        this.mpesaTokenHandler(result.token)
                    }
                })
            }
        },

        async mpesaTokenHandler(token) {
            const items = []
            for (let i = 0; i < this.cart.items.length; i++) {
                const item = this.cart.items[i]
                const obj = {
                    product: item.product.id,
                    quantity: item.quantity,
                    price: item.product.price * item.quantity
                }
                items.push(obj)
            }
            
            const data = {
                'first_name': this.first_name,
                'last_name': this.last_name,
                'email': this.email,
                'address': this.address,
                'postal_code': this.postalcode,
                'county': this.county,
                'phone': this.phone,
                'items': items,
                'mpesa_token': token.id
            }
            await axios
                .post('/api/v1/checkout/', data)
                .then(response => {
                    this.$store.commit('clearCart')
                    this.$router.push('/cart/success')
                })
                .catch(error => {
                    this.errors.push('Something went wrong. Please try again')
                    console.log(error)
                })
                this.$store.commit('setIsLoading', false)
        }
    },

    computed: {
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        }
    }
}
</script>
