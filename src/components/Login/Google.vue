<template>
  <div>
    <button
      class="w-full rounded shadow-md bg-blue-400 text-black p-2 hover:bg-blue-200 mt-6"
      @click="loginWithGoogle"
    >
      Login with Google
    </button>
  </div>
</template>

<script>
  import firebase from '../../utilities/firebase'

  export default {
    methods: {
      loginWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => {
            this.$emit('close-google-login')
          })
      },
    },
  }
</script>
