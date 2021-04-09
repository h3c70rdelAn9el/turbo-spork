<template>
  <div>
    <Navbar @open-login="isLoginOpen = true" />
    <div class="bg-gray-300">
      <router-view />
    </div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import LoginModal from '@/components/LoginModal'

export default {
  data() {
    return {
      isLoginOpen: false,
    }
  },
  components: {
    Navbar,
    LoginModal
  }
}
</script>
