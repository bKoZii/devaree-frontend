<template>
  <div
    ref="emblaRef"
    class="embla"
  >
    <div class="embla__container">
      <template
        v-for="image in images"
        :key="image"
      >
        <div class="embla__slide">
          <img
            :src="image"
            alt="image"
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true })

onMounted(() => {
  if (emblaApi.value) {
    console.log(emblaApi.value.slideNodes())
  }
})

const images = [
  '/banner1.png',
  '/banner2.png',
]
</script>

<style scoped>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
