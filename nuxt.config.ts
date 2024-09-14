// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vant/nuxt'],
  css: [
    '@/assets/css/style.css'
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_APP_BASE_API
    }
  }
})

