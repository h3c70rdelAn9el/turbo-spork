<template>
  <div class="-ml-3 h-full mb-10">
    <ImageSlider />
  </div>
  <div class="flex mt-10">
    <button
      @click="isDetailsShowing = !isDetailsShowing"
      class="px-2 rounded mx-auto border py-1"
    >
      Toggle information
    </button>
  </div>
  <div>
    <transition name="fade" class="">
      <h1 v-if="isDetailsShowing" class="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quia.
      </h1>
    </transition>
  </div>
</template>

<script>
  import ImageSlider from '@/components/ImageSlider.vue'

  export default {
    data() {
      return {
        isDetailsShowing: true,
      }
    },
    components: {
      ImageSlider,
    },
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    /* transition: all 1s ease; */
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

  }


  .fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
