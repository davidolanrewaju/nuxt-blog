<template>
  <div class="news-hero relative max-w-full">
    <div class="img-container shadow-md rounded-lg">
      <img
        :src="news.urlToImage || defaultImage"
        alt="News Image"
        class="news-image w-full h-full object-cover object-center rounded-lg"
      />
    </div>
    <div
      class="shadow-md news-content mx-auto w-full md:w-9/12 md:rounded-tr-2xl absolute bottom-0 bg-white text-black p-4 sm:p-6 md:p-8"
    >
      <h1 class="font-medium pb-2 text-xs md:text-base">
        {{ news.author }} - {{ formattedDate }}
      </h1>
      <h2
        class="news-title font-dmserif text-xl md:text-4xl pb-1"
      >
        {{ news.title }}
      </h2>
      <p class="news-titl pb-2 text-xs md:text-base">{{ news.content }}</p>

      <NuxtLink :to="`/${news.title}`" class="news-link text-xs md:text-base border-b border-black pb-1">Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import defaultImage from "../assets/images/default-image.jpg";

const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  const date = new Date(props.news.publishedAt);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<style scoped lang="postcss">
.img-container {
  height: 500px;
  @screen lg {
    height: 600px;
  }
}
</style>
