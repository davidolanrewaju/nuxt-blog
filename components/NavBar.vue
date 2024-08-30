<template>
  <div class="bg-white max-w-full container">
    <div
      class="hidden lg:visible top-nav w-full px-24 py-7 mb-6 lg:grid grid-cols-3 items-center"
    >
      <div class="flex items-center gap-6 justify-self-start">
        <img
          src="../assets/icons/hamburger-icon.svg"
          alt="hamburger"
          class="w-8 h-8 cursor-pointer"
          @click="$emit('toggleMenu')"
        />
        <div class="input-container">
          <input
            type="text"
            placeholder="Search"
            class="bg-transparent text-sm outline-none border border-black rounded-full p-2"
          />
        </div>
      </div>
      <div class="logo justify-self-center">
        <a class="logo md:text-4xl lg:text-6xl font-dmserif" href="/">
          .hello<span class="font-black">World</span>
        </a>
      </div>
      <div class="socials flex items-center md:gap-2 lg:gap-4 justify-self-end">
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/facebook-icon.svg"
          alt="facebook"
        />
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/twitter-icon.svg"
          alt="twitter"
        />
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/instagram-icon.svg"
          alt="instagram"
        />
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/youtube-icon.svg"
          alt="youtube"
        />
      </div>
    </div>

    <div class="lg:hidden top-nav w-full px-3 md:px-16 py-7 grid gap-5 md:gap-0 grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center justify-items-center">
      <div class="w-full flex items-center justify-between md:justify-self-start">
        <img
          src="../assets/icons/hamburger-icon.svg"
          alt="hamburger"
          class="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
          @click="$emit('toggleMenu')"
        />
        <div class="logo">
          <a class="logo text-3xl md:text-4xl font-dmserif" href="/">
            .hello<span class="font-black">World</span>
          </a>
        </div>
      </div>
      <div class="socials w-full flex items-center justify-center md:justify-end gap-5">
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/facebook-icon.svg"
          alt="facebook"
        />
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/twitter-icon.svg"
          alt="twitter"
        />
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/instagram-icon.svg"
          alt="instagram"
        />
        <img
          class="w-8 h-8 border border-black rounded-full p-2"
          src="../assets/icons/youtube-icon.svg"
          alt="youtube"
        />
      </div>
    </div>
    <div class="lg:hidden w-full input-container px-3 md:px-16 mb-8">
      <input
        type="text"
        placeholder="Search"
        class="w-full bg-transparent text-xs md:text-base outline-none border border-black rounded-full p-2"
      />
    </div>

    <nav class="hidden md:visible bottom-nav md:flex justify-center border-b pb-2.5">
      <ul class="flex items-center gap-10 text-black">
        <li class="font-bold"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="font-bold">
          <NuxtLink to="/sports">Sport</NuxtLink>
        </li>
        <li class="font-bold">
          <NuxtLink to="/tech">Tech</NuxtLink>
        </li>
        <li class="font-bold">
          <NuxtLink to="/entertainment">Entertainment</NuxtLink>
        </li>
        <li class="font-bold">
          <NuxtLink to="/business">Business</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  border-bottom: 4px solid #000;
  padding-bottom: 10px;
}
</style>
