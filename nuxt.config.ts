// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
   
    ['@pinia/nuxt',{
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    }],
    '@nuxtjs/tailwindcss',
    '@invictus.codes/nuxt-vuetify',
     ['@vee-validate/nuxt',{
  
      autoImports: true,
    },
  ],
      ,
  ],
  vite:{
    server:{
      proxy:{'/api':"https://blog-api.codeyad-project.ir"}
    }
  }

})
