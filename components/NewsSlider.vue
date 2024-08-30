<!-- Slider.vue -->
<template>
  <div class="slider-container relative">
    <div class="slider w-full flex overflow-hidden" ref="sliderContainer">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ hidden: index !== currentSlide }"
        class="slide w-full"
      >
        <slot :name="index" :slide="slide"></slot>
      </div>
    </div>
    <button
      @click="changeSlide(-1)"
      class="prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-r-lg"
    >
      &#10094;
    </button>
    <button
      @click="changeSlide(1)"
      class="next absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-l-lg"
    >
      &#10095;
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  autoSlideInterval: {
    type: Number,
    default: 5000,
  },
});

const currentSlide = ref(0);
const sliderContainer = ref(null);
let interval;

const changeSlide = (n) => {
  currentSlide.value =
    (currentSlide.value + n + props.slides.length) % props.slides.length;
};

const startAutoSlide = () => {
  interval = setInterval(() => {
    changeSlide(1);
  }, props.autoSlideInterval);
};

const stopAutoSlide = () => {
  clearInterval(interval);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.slider-container {
  height: 600px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide:not(.hidden) {
  opacity: 1;
}
</style>
