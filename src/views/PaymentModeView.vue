<template>
   <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full">
                        <thead class="bg-white border-b" >
                          <tr>
                           
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Total
                            </th>
                         
                          </tr>
                        </thead>
                        <tbody>

                            <!-- <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
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
                            </tfoot> -->
                        </tbody>
                      </table>
                    </div>

                   <div>
                   
                    
                   </div>
                  </div>
                </div>
              </div>
</template>

<script>
export default {
    name: "PaymentModeView"
}
</script>

<style>

</style>