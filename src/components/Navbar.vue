<template>
  <div>
     <div class="nav flex flex-row justify-between mx-3">
      <div v-for="link in links" :key="link">
        <router-link :to="link.url">{{ link.name }}</router-link>
      </div>
      <div>
        <router-link to="/characters">Characters</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Characters',
          url: '/characters'
        }
      ]
    }
  },
}
</script>
