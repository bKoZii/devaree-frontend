// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
        { name: 'theme-color', content: '#A31D1D' },
      ],
      htmlAttrs: {
        lang: 'th',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    app: {
      liffId: process.env.NUXT_LIFF_ID,
    },
  },
  compatibilityDate: '2025-01-10',
  eslint: {
    config: {
      stylistic: {
        jsx: false,
        arrowParens: true,
        braceStyle: '1tbs',
      },
    },
  },
  googleFonts: {
    families: {
      'Bai Jamjuree': [400, 500, 600, 700, 800],
      'Lato': [400, 500, 600, 700, 800],
    },
  },
  tailwindcss: {
    editorSupport: true,
  },
})
