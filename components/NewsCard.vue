<template>
  <div class="news-card">
    <div class="img-container w-full h-52">
      <img
        :src="news.urlToImage || defaultImage"
        alt="News Image"
        class="news-image w-full h-full object-cover object-center rounded-lg"
      />
    </div>
    <div class="news-content pt-4 self-end justify-self-center">
      <h1 class="font-medium pb-2 md:pb-4 text-xs md:text-base">{{ news.author }} - {{ formattedDate }}</h1>
      <h2 class="news-title font-dmserif text-xl md:text-2xl pb-2">{{ news.title }}</h2>
      <NuxtLink :to="`/${news.title}`" class="news-link text-xs md:text-base border-b border-black pb-1">Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
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
