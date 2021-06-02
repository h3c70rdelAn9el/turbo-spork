<template>
  <div class="flex flex-col h-full">
    <Navbar  @open-login="isLoginOpen = true" :isLoggedIn="isLoggedIn" />
    <router-view class=""/>
    <footer class="bg-black h-6 fixed bottom-1">footer</footer>
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
        isRegisterOpen: false,
      }
    },
    mounted() {
      firebase
        .auth()
        .onAuthStateChanged((user) => {
          if (user) {
            this.$store.commit('setAuthUser', user)
            this.$store.commit('setIsLoggedIn', true),
            this.$store.commit('setLoginModal', false)
          } else {
            this.$store.commit('setIsLoggedIn', false)
            this.$store.commit('setAuthUser', {})
          }
        })
    
    },
  }
</script>
