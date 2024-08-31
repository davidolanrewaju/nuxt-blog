// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: '6963a7ab8e04414faaf88818fad733a9',
      apiBaseUrl: 'https://newsapi.org/v2'
    }
  },
  typescript: {
    strict: true
  },
  modules: ["@nuxtjs/tailwindcss"],
});
