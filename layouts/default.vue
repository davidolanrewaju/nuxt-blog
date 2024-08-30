<template>
  <div class="max-w-full">
    <NavBar @toggleMenu="toggleMenu" />
    <main :class="{ blurred: isMenuVisible }">
      <slot />
    </main>
    <Footer />
    <div
      v-if="isMenuVisible"
      class="fixed inset-0 bg-black opacity-50 z-40"
      @click="closeMenu"
    ></div>
    <HamburgerMenu :isVisible="isMenuVisible" @closeMenu="closeMenu" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import HamburgerMenu from "~/components/HamburgerMenu.vue";

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const closeMenu = () => {
  isMenuVisible.value = false;
};
</script>

<!-- <style scoped>
.blurred {
  filter: blur(2px);
}
</style> -->
