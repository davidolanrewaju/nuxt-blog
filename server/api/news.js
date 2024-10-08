import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  const apiKey = useRuntimeConfig().public.apiKey;
  const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
  const { endpoint, q, language, excludeDomains } = getQuery(event);

  try {
    const url = `${apiBaseUrl}/${endpoint}?q=${q}&language=${language}&excludeDomains=${excludeDomains}&apiKey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
});
