<template>
  <div>
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-gray-100 p-2 rounded shadow-lg w-1/2">
          <div class="p-2 border bg-white">
            <h1 class="text-xl text-center">
              Register
            </h1>
            <div>
              <form class="p-2 my-2" @submit.prevent="submit">
                <div>
                  <label class="my-4" for="name">Name</label>
                  <input
                    ref="nameRef"
                    v-model="name"
                    type="text"
                    class="rounded shadow p-2 w-full"
                    placeholder="Frodo Skywalker"
                  />
                </div>
                <div>
                  <label class="my-4" for="email">Email</label>
                  <input
                    ref="emailRef"
                    v-model="email"
                    type="text"
                    class="rounded shadow p-2 w-full"
                    placeholder="user@example.com"
                  />
                </div>
                <div class="mt-3">
                  <label class="my-4" for="password">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="rounded shadow p-2 w-full"
                    placeholder="********"
                  />
                </div>
                <div class="my-4">
                  <button
                    type="submit"
                    class="w-full rounded shadow-md bg-blue-400 text-black p-2 hover:bg-blue-200"
                  >
                    <span v-if="!isLoading">Register</span>
                    <span v-else>⏳</span>
                  </button>
                  <Google @close-google-login="close" />

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../utilities/firebase'
import Google from '@/components/Login/Google.vue'

export default {
  components: {
    Google
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    submit() {
      this.isLoading = true
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.name = '',
          this.email = ''
          this.password = ''
          this.isLoading = false
          this.close()
        })
        .catch((e) => {
          console.log(e)
          this.isLoading = false
        })
    },
    close() {
      this.$emit('close-register')
    },
 
  },
  mounted() {
    this.$refs.nameRef.focus()
  },
}
</script>
