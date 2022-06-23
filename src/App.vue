<template>
   <div
    class="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100"
    
  >
    <Navbar/>
    <router-view></router-view>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>