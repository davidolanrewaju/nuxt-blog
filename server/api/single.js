import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  const apiKey = useRuntimeConfig().public.apiKey;
  const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
  const { q } = getQuery(event);

  try {
    const url = `${apiBaseUrl}/everything?q=${encodeURIComponent(q)}&searchIn=title&apiKey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
});