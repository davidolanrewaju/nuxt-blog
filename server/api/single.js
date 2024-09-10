import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  const apiKey = useRuntimeConfig().public.apiKey;
  const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
  const { endpoint, q, searchIn } = getQuery(event);

  try {
    const url = `${apiBaseUrl}/${endpoint}?q=${q}&searchIn=${searchIn}&apiKey=${apiKey}`;
    const response = await fetch(url);
    console.log(await response.json());

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
});
