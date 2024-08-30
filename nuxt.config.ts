// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: '0aebb269250a477d9a67f31477654ee5',
      apiBaseUrl: 'https://newsapi.org/v2'
    }
  },
  typescript: {
    strict: true
  },
  modules: ["@nuxtjs/tailwindcss"],
});
