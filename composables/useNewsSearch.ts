import { ref, watch } from 'vue'
import { useDebounce } from '@vueuse/core'
import { useRuntimeConfig } from "#app";

export function useNewsSearch() {
  const searchQuery = ref('')
  const searchResults = ref([])
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  // Debounce the search query to avoid making too many API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  async function fetchNews() {
    const config = useRuntimeConfig();

    if (!debouncedSearchQuery.value) {
      loading.value = false;
      searchResults.value = []
      return
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${config.public.apiBaseUrl}/everything?q=${encodeURIComponent(debouncedSearchQuery.value)}&language=en&apiKey=${config.public.apiKey}`)
      const data = await response.json()

      if (data.status === 'ok') {
        searchResults.value = data.articles
      } else {
        throw new Error(data.message || 'Failed to fetch news')
      }
    }  catch (e) {
      error.value = e instanceof Error ? e.message : "An unknown error occurred";
    } finally {
      loading.value = false;
    }
  }

  watch(debouncedSearchQuery, fetchNews)

  return {
    searchQuery,
    searchResults,
    loading,
    error,
  }
}
