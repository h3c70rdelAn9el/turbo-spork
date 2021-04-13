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
import firebase from './utilities/firebase'

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    }
  },
  mounted() {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true
          this.authUser = user
        } else {
          this.isLoggedIn = false
          this.authUser = {}
        }
      })
  },
  components: {
    Navbar,
    LoginModal
  }
}
</script>
