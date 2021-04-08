<template>
<div class="-ml-3 h-full">
  <ImageSlider />
</div>
<div class="my-3 ml-3 mt-10 pb-20 flex w-full">
  <div>
    <transition name="fade" class="h-8">
      <h1 v-if="isDetailsShowing" class="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quia.
      </h1>
    </transition>
      <button @click="isDetailsShowing = !isDetailsShowing" class="px-2 rounded border ml-6">Toggle information</button>
  </div>
</div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  data() {
    return {
      isDetailsShowing: true
    }
  },
  components: {
    ImageSlider
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%)
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%)
}
</style>
