import { ref, onMounted, type Ref } from "vue";
import { useRuntimeConfig } from "#app";

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  source: object;
  url: string;
  urlToImage: string;
}

export default function useSportNews() {
  const articles: Ref<Article[]> = ref([]);
  const article: Ref<Article | null> = ref(null);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  const fetchEntertainmentNews = async (): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/category?endpoint=top-headlines&category=entertainment&language=en&excludeDomains=yahoo.com');
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }
      const data = await response.json();
      articles.value = data.articles.filter((article: Article) => article.author !== null);
    } catch (e) {
      error.value = e instanceof Error ? e.message : "An unknown error occurred";
    } finally {
      loading.value = false;
    }
  };

  const fetchSingleEntertainmentNews = async (title: string): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`/api/single?endpoint=everything&q=${encodeURIComponent(title)}&searchIn=title`);
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }
      const data = await response.json();
      article.value = data.articles?.[0] ?? null;
    } catch (e) {
      error.value = e instanceof Error ? e.message : "An unknown error occurred";
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchEntertainmentNews);

  return { articles, loading, error, article, fetchEntertainmentNews, fetchSingleEntertainmentNews };
}
