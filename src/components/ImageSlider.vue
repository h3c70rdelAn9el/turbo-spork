<template>
  <div class="relative flex flex-wrap w-full">
    <div v-for="(color, index) in slides" :key="color" class="absolute w-full">
      <transition name="fade">
        <div v-if="currentSlide === index" class=" w-full" :class="color" style="height:450px"></div>
      </transition>
    </div>
    <div class="w-full flex z-20" style="height: 450px">
      <div class="mx-auto my-auto text-center">
        <h2 class="text-2xl">A basic carousel!</h2>
        <p class="mx-28">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptates similique suscipit amet, nesciunt soluta minus eligendi eum voluptas quaerat!</p>
      </div>
      <div class="absolute bottom-0 flex w-full justify-center">
        <div v-for="(slide, index) in slides" :key="slide" @click="makeActive(index)" :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-200'" class="w-2 mx-1 h-2 rounded-full cursor-pointer">
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        'bg-blue-600',
        'bg-red-600',
        'bg-purple-600',
      ],
      interval: '',
      isDetailsShowing: true
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1
    }, 2000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
