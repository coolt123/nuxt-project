// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true } , 
  modules: [
    '@ant-design-vue/nuxt','@pinia/nuxt'
  ],
  ssr : true,
  nitro: {
    preset: 'node', // Hoặc 'vercel', 'cloudflare' tùy vào nơi deploy
    devProxy: {
      '/api': 'http://localhost:3000' // Proxy API trong môi trường dev
    }
  },
  
});
