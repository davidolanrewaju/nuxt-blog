<template>
  <div
    v-if="isVisible"
    class="fixed inset-y-0 left-0 z-50 transition-transform duration-300 transform"
    :class="{ 'translate-x-0': isVisible, '-translate-x-full': !isVisible }"
  >
    <div class="relative bg-white h-full w-64 py-5 shadow-lg">
      <button @click="$emit('closeMenu')" class="border border-black rounded-full p-1 absolute top-2 right-2">
        <img class="w-5 h-5" src="../assets/icons/close-icon.svg" alt="close">
      </button>
      <nav class="hamburger-nav mt-20">
        <ul class="text-black">
          <li class="border-t border-gray-300 p-5 font-light text-black uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-500"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="border-t border-gray-300 p-5 font-light text-black uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            <NuxtLink to="/sports">Sport</NuxtLink>
          </li>
          <li class="border-t border-gray-300 p-5 font-light text-black uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            <NuxtLink to="/tech">Tech</NuxtLink>
          </li>
          <li class="border-t border-gray-300 p-5 font-light text-black uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            <NuxtLink to="/entertainment">Entertainment</NuxtLink>
          </li>
          <li class="border-y border-gray-300 p-5 font-light text-black uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            <NuxtLink to="/business">Business</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});
</script>

<!-- <style scoped>
.translate-x-0 {
  transform: translateX(0);
}

.-translate-x-full {
  transform: translateX(-100%);
}
</style> -->
