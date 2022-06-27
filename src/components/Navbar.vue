<template>
<div :class="sidebarOpen ? 'overflow-hidden h-screen' : ''">
 
  <nav
      class="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24"
    >
      <a href="#" class="text-3xl md:text-4xl font-bold tracking-wide">
        Tamu <span class="text-green">Dishes</span>
      </a>
      
      <div
        class="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
        :class="sidebarOpen ? 'fixed flex' : 'hidden'"
      >

        <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
          <router-link to="/" class="text-lg md:text-base lg:text-lg font-medium group" :class="activeMenu">
            Home
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/exotic" class="text-lg md:text-base lg:text-lg font-medium group">
            Exotic 
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/foreign" class="text-lg md:text-base lg:text-lg font-medium group">
            Foreigin
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/cart" class="text-lg md:text-base lg:text-lg font-medium group">
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart ({{ cartTotalLength }}) </div>
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="" class="text-lg md:text-base lg:text-lg font-medium group">
            Contact
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

           <router-link to="/my-account" class="text-lg md:text-base lg:text-lg font-medium group"
            v-if="$store.state.isAuthenticated">
            My Account
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/log-in" class="text-lg md:text-base lg:text-lg font-medium group"
            v-else>
            Login
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

        </div>
   
        <button
          class="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
        >
          Register
        </button>
      </div>
      <button @click="sidebarOpen = !sidebarOpen" class="block md:hidden relative z-30">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current text-gray-900" >
          <rect x="4" y="6" width="7" height="2" rx="1" />
          <rect x="13" y="16" width="7" height="2" rx="1" />
          <rect x="4" y="11" width="16" height="2" rx="1" />
        </svg>
      </button>
      
    </nav>
    <div class="relative flex flex-col justify-between overflow-hidden md:ml-64 md:-mr-64 sm:py-12">
        <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <form method="get" action="/search" class="relative mx-auto w-max">
              <input type="search" name="query"
                    class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </div>
        </div>
      </div>
  </div>
  

</template>

<script>

export default {
  name: "Navbar",

  data() {
    return {
      sidebarOpen : false,
      activeMenu : "text-green",
      cart: {
        items: []
      }
    }
  },

  computed: {
    cartTotalLength(){
      let totalLength = 0

      for(let i = 0; i < this.cart.items.length; i++){
        totalLength += this.cart.items[i].quantity
      }
      return totalLength
    }      


  }
}

</script>
