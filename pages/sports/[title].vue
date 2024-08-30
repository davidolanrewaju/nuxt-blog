<template>
  <div class="mt-8 md:mt-16 px-4 md:px-8 lg:px-16 xl:px-36 max-w-full">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-center text-red-600">{{ error }}</div>

    <div v-if="article" class="space-y-4 md:space-y-6">
      <h2 class="font-dmserif text-2xl md:text-3xl lg:text-4xl pb-2 md:pb-4">
        {{ article.title }}
      </h2>
      <p class="font-semibold text-sm md:text-base pb-4 md:pb-8">
        {{ article.author }} -
        <span class="font-light">{{ formattedDate }}</span>
      </p>
      <i class="text-base md:text-lg block">{{ article.description }}</i>
      <div class="img-container mx-auto w-full md:w-10/12 my-6 md:my-10">
        <img
          :src="article.urlToImage || defaultImage"
          alt="News Image"
          class="news-image w-full h-auto object-cover object-center rounded-lg"
        />
      </div>
      <p class="text-base md:text-lg">{{ article.content }}</p>
      <div class="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 mx-auto">
        <button
          class="w-full border-2 border-gray-900 bg-transparent text-lg md:text-xl font-semibold text-gray-900 hover:text-white hover:border-transparent hover:bg-gray-900 my-6 md:my-8 py-2 md:py-3 rounded transition duration-300"
        >
          <a :href="article.url" target="_blank" class="block w-full h-full"
            >Read More</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import useSportNews from "~/composables/useSportNews";
import defaultImage from "../../assets/images/default-image.jpg";

const { article, loading, error, fetchSingleSportNews } = useSportNews();

onMounted(() => {
  const { title } = useRoute().params;
  if (title) {
    fetchSingleSportNews(title);
  }
});

const formattedDate = computed(() => {
  if (!article.value || !article.value.publishedAt) return "";
  const date = new Date(article.value.publishedAt);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>
