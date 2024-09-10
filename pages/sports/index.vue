<template>
  <div class="px-4 md:px-8 lg:px-16 xl:px-20 max-w-full">
    <div class="text-center" v-if="loading">
      <p>Loading...</p>
    </div>

    <div v-else>
      <div class="body w-full">
        <div class="py-6 sm:py-8 md:py-10">
          <div class="inline-block relative">
            <h1 class="header font-dmserif text-3xl sm:text-4xl md:text-5xl relative z-10">
              Sports
            </h1>
            <div
              class="headline-underline absolute left-0 top-6 sm:top-8 md:top-10 w-full h-3 bg-yellow-500 sm:h-4 transform translate-y-[-50%]"
            ></div>
          </div>
        </div>
        <div class="news-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <NewsCard
            v-for="article in paginatedArticles"
            :key="article.url"
            :news="article"
          />
        </div>
        <div class="pagination flex justify-center items-center mt-8">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-3 py-2 mr-2 text-white disabled:opacity-50"
          >
            <img class="w-6 h-6 sm:w-8 sm:h-8 border-2 border-black rounded-full p-1 sm:p-2" src="../../assets/icons/backward-arrow-icon.svg" alt="">
          </button>
          <span class="mx-2 sm:mx-4 text-sm sm:text-base">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-2 ml-2 text-white disabled:opacity-50"
          >
            <img class="w-6 h-6 sm:w-8 sm:h-8 border-2 border-black rounded-full p-1 sm:p-2" src="../../assets/icons/forward-arrow-icon.svg" alt="">
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center text-2xl text-red-600" v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import useSportNews from "~/composables/useSportNews";
import NewsCard from "~/components/NewsCard.vue";

const { articles, loading, error } = useSportNews();

const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() =>
  Math.ceil(articles.value.length / itemsPerPage)
);

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articles.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>
