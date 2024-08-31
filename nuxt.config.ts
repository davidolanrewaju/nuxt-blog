// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: process.env.NEWS_API_KEY,
      apiBaseUrl: process.env.NEWS_API_BASE_URL
    }
  },
  typescript: {
    strict: true
  },
  modules: ["@nuxtjs/tailwindcss"],
});
