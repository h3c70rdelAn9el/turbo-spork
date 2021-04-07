<template>
  <div>
   <Navbar />
    <div class="bg-gray-300">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
