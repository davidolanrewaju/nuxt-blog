<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(article, index) in filteredArticles" :key="index">
      <NuxtLink :to="`/news/${article.title}`">{{ article.title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: response } = await useFetch(
  `https://newsapi.org/v2/everything?q=*&apiKey=6963a7ab8e04414faaf88818fad733a9`
);

const newsArticles = response.value.articles;

const filteredArticles = newsArticles.filter(
  (article) => article.author !== null);

console.log(filteredArticles);
</script>
