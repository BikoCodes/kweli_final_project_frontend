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
                                <h2 class="text-xl mb-5">Shipping Detail</h2>
                                 <h2 class="text-xl">s</h2>
                    
                    <p>* All fields are required</p>

                                <div class="mb-4">
                                    <input
                                    placeholder="Your Name"
                                    type="text"
                                    name="name"
                                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                </div>
                                <div class="mb-4">
                                    <input
                                    placeholder="Your Email"
                                    type="email"
                                    name="email"
                                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                </div>
                                <div class="mb-4">
                                    <input
                                    placeholder="Your Phone"
                                    type="text"
                                    name="phone"
                                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                </div>
                                </div>
                                <!--/ Profile Details -->

                                <!-- Billing Address -->
                                <div class="mb-6">
                                <h2 class="text-xl mb-5">Billing Address</h2>
                                <div class="flex gap-3">
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="Address 1"
                                        type="text"
                                        name="billing_address_1"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="Address 2"
                                        type="text"
                                        name="billing_address_2"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="City"
                                        type="text"
                                        name="billing_city"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="State"
                                        type="text"
                                        name="billing_state"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <div class="mb-4 flex-1">
                                    <select
                                        placeholder="Country"
                                        type="text"
                                        name="billing_country"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    >
                                        <option value="">Country</option>
                                        <option value="ge">Georgia</option>
                                        <option value="de">Germany</option>
                                        <option value="in">India</option>
                                        <option value="us">United Kingdom</option>
                                        <option value="uk">United States</option>
                                    </select>
                                    </div>
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="Zipcode"
                                        type="text"
                                        name="billing_zipcode"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                </div>
                                </div>
                                <!--/ Billing Address -->

                                <!-- Shipping Address -->
                                <div class="mb-6">
                                <div class="flex items-center justify-between mb-5">
                                    <h2 class="text-xl">Shipping Address</h2>
                                    <div class="flex items-center">
                                    <input
                                        id="sameAsBillingAddress"
                                        type="checkbox"
                                        class="mr-3 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                                    />
                                    <label for="sameAsBillingAddress">Same as Billing</label>
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="Address 1"
                                        type="text"
                                        name="shipping_address_1"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="Address 2"
                                        type="text"
                                        name="shipping_address_2"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="City"
                                        type="text"
                                        name="shipping_city"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="State"
                                        type="text"
                                        name="shipping_state"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                </div>
                                <div class="flex gap-3">
                                    <div class="mb-4 flex-1">
                                    <select
                                        placeholder="Country"
                                        type="text"
                                        name="shipping_country"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    >
                                        <option value="">Country</option>
                                        <option value="ge">Georgia</option>
                                        <option value="de">Germany</option>
                                        <option value="in">India</option>
                                        <option value="us">United Kingdom</option>
                                        <option value="uk">United States</option>
                                    </select>
                                    </div>
                                    <div class="mb-4 flex-1">
                                    <input
                                        placeholder="Zipcode"
                                        type="text"
                                        name="shipping_zipcode"
                                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                    />
                                    </div>
                                </div>
                                </div>
                                <!--/ Shipping Address -->

                                <button class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full">Update</button>
                            </div>

                            <div class="col-span-2 bg-white p-4 rounded-lg shadow">
                                <h2 class="text-xl mb-5">Your Account</h2>
                                <div class="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Current password"
                                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                />
                                </div>
                                <div class="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="New password"
                                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                />
                                </div>
                                <div class="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Repeat new password"
                                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                                />
                                </div>
                                <div>
                                <button class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700">Update</button>
                                </div>
                            </div>
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
            place: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'CheckOut | Food'

        this.cart = this.$store.state.cart

        if (this.cartTotalLength > 0) {
            this.stripe = Stripe('pk_test_51H1HiuKBJV2qfWbD2gQe6aqanfw6Eyul5PO2KeOuSRlUMuaV4TxEtaQyzr9DbLITSZweL7XjK3p74swcGYrE2qEX00Hz7GmhMI')
            
            const elements = this.stripe.elements();

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
            
            if (this.place === '') {
                this.errors.push('The place field is missing!')
            }

            if (!this.errors.length) {
                this.$store.commit('setIsLoading', true)
                this.stripe.createToken(this.card).then(result => {                    
                    if (result.error) {
                        this.$store.commit('setIsLoading', false)
                        this.errors.push('Something went wrong with Stripe. Please try again')
                        console.log(result.error.message)
                    } else {
                        this.stripeTokenHandler(result.token)
                    }
                })
            }
        },

        async stripeTokenHandler(token) {
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
                'place': this.place,
                'phone': this.phone,
                'items': items,
                'stripe_token': token.id
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
