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
}
</script>
