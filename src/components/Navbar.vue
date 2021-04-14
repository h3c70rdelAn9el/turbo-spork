<template>
  <div>
    <div class="nav flex flex-row justify-between mx-3">
      <div class="w-10">
        <router-link to="/">Home</router-link>
      </div>
      <div class="flex flex-row">
        <div v-for="link in links" :key="link">
          <router-link :to="link.url" class="p-1" >{{ link.name }}</router-link>
        </div>
        <button v-if="isLoggedIn" @click="logout">Log Out</button>
        <button v-else class="mr-2" @click="$emit('open-login')">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
  props: { 'isLoggedIn': { type: Boolean, required: true } },
  data() {
    return {
      links: [
        {
          name: 'Characters',
          url: '/characters'
        },
        {
          name: 'Calendar',
          url: '/calendar'
        },
        {
          name: 'Markdown',
          url: '/markdown'
        },
        {
          name: 'Slider',
          url: '/slider'
        }
      ]
    }
  },
  // computed: {
  //   isLoggedIn(){
  //     return this.$store.state.isLoggedIn
  //   }
  // },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        // .then(res=> {})
        // .catch((e) => {})
    }
  }
}
</script>
