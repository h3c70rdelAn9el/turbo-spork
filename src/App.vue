<template>
  <div>
    <Navbar :isLoggedIn="isLoggedIn" @open-login="isLoginOpen = true" />
    <div class="bg-gray-300">
      <router-view />
    </div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" @open-register="isRegisterOpen = true" />
    <RegisterModal v-if="isRegisterOpen" @open-register="isRegisterOpen =  true" @close-register="isRegisterOpen = false" />
  </div>
</template>

<script>
  import firebase from './utilities/firebase'
  import Navbar from '@/components/Navbar'
  import LoginModal from '@/components/LoginModal'
  import RegisterModal from '@/components/RegisterModal'

  export default {
    components: {
      Navbar,
      LoginModal,
      RegisterModal
    },
    data() {
      return {
        isLoginOpen: false,
        isLoggedIn: false,
        isRegisterOpen: false,
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

  }
</script>
