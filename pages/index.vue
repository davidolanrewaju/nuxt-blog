<template>
  <div class="px-4 md:px-8 lg:px-16 xl:px-20 max-w-full">
    <div v-if="loading">
      <p>Loading...</p>
    </div>

    <div v-else>
      <div class="hero mt-12 md:mt-16 lg:mt-20">
        <NewsSlider :slides="mainDisplayArticles">
          <template
            v-for="(article, index) in mainDisplayArticles"
            :key="article.url"
            v-slot:[index]="{ slide }"
          >
            <NewsHero :news="slide" />
          </template>
        </NewsSlider>
      </div>

      <hr class="border border-black md:mt-20 lg:mt-28 mb-6 sm:mb-8 md:mb-10" />

      <div class="body w-full">
        <div class="py-6 sm:py-8 md:py-10">
          <div class="inline-block relative">
            <h1 class="header font-dmserif text-3xl sm:text-4xl md:text-5xl relative z-10">
              Top Headlines
            </h1>
            <div
              class="headline-underline absolute left-0 top-6 sm:top-8 md:top-10 w-full h-3 sm:h-4 bg-pink-300 transform translate-y-[-50%]"
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
            <img class="w-6 h-6 sm:w-8 sm:h-8 border-2 border-black rounded-full p-1 sm:p-2" src="../assets/icons/backward-arrow-icon.svg" alt="">
          </button>
          <span class="mx-2 sm:mx-4 text-sm sm:text-base">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-2 ml-2 text-white disabled:opacity-50"
          >
            <img class="w-6 h-6 sm:w-8 sm:h-8 border-2 border-black rounded-full p-1 sm:p-2" src="../assets/icons/forward-arrow-icon.svg" alt="">
          </button>
        </div>
      </div>
    </div>

    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import useHomeNews from "@/composables/useHomeNews";
import NewsCard from "~/components/NewsCard.vue";
import NewsHero from "~/components/NewsHero.vue";
import NewsSlider from "~/components/NewsSlider.vue";

const { articles, loading, error } = useHomeNews();

const mainDisplayArticles = computed(() => articles.value.slice(0, 5));

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
