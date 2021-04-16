<template>
  <div>
    <nav class="nav flex flex-row justify-between mx-3">
      <div class="w-10 mt-1">
        <router-link to="/">Home</router-link>
      </div>
      <div class="lg:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="text-gray-800 hover:text-white focus:text-white focus:outline-none mt-1"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:block" >

        <div class="flex flex-row">
          <div v-for="link in links" :key="link">
            <router-link :to="link.url">
              <p class="mr-2 p-1">{{ link.name }}</p>
            </router-link>
          </div>
          <button v-if="isLoggedIn" @click="logout">Log Out</button>
          <button v-else class="mr-2" @click="$emit('open-login')">
            Login
          </button>
        </div>
      </div>
      <button
        v-if="isOpen"
        @click="isOpen = false"
        class="fixed inset-0 h-full w-full cursor-default bg-gray-900 opacity-90"
      >
        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="relative z-20 px-2 pt-2 pb-4 sm:p-0"
        >
          <div v-for="link in links" :key="link">
            <router-link
              :to="link.url"
              class="p-1 text-xl text-gray-300 hover:text-gray-800 hover:bg-gray-200 rounded-md mt-4"
              >{{ link.name }}</router-link
            >
          </div>
          <div class="text-gray-300 text-xl">
            <button v-if="isLoggedIn" class="hover:text-gray-800 " @click="logout">Log Out</button>
            <button v-else class="hover:text-gray-800 hover:bg-gray-200 rounded-md mt-2 p-1" @click="$emit('open-login')">
              Login
            </button>
          </div>
        </div>
      </button>
    </nav>
  </div>
</template>

<script>
  import firebase from '../utilities/firebase'
  import { ref } from 'vue'

  export default {
    // props: { isLoggedIn: { type: Boolean, required: true } },
    data() {
      return {
        links: [
        {
          name: 'Characters',
          url: '/characters',
        },
        {
          name: 'Calendar',
          url: '/calendar',
        },
        {
          name: 'Markdown',
          url: '/markdown',
        },
        {
          name: 'Slider',
          url: '/slider',
        },
        {
          name: 'Calculator',
          url: '/calculator',
        },
        ]
      }
    },
      computed: {
        isLoggedIn() {
          return this.$store.state.isLoggedIn
        }
      },
    setup() {

      function logout() {
        firebase.auth().signOut()
      }


      const isOpen = ref(false)
      // const isHidden = ref(false)
      
      return {  logout, isOpen }
    },
  }
</script>
