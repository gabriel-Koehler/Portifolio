// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:[
    '',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo-loader',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  googleFonts:{
    families:{
      Manjari:[400,500],
      Kanit:[400,500]
    }
  }
})