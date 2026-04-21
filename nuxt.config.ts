export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://terrassement.td-locationbenne37.fr',
    name: 'TD Terrassement 37',
    description: 'Entreprise de terrassement en Indre-et-Loire (37). Excavation, nivellement, remblaiement à Tours et dans tout le département.',
    defaultLocale: 'fr'
  },

  sitemap: {
    strictNuxtContentPaths: false
  },

  robots: {
    disallow: []
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Crimson+Pro:wght@400;600;700&display=swap' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/zones': { prerender: true },
    '/zones/**': { prerender: true },
    '/contact': { prerender: true },
    '/mentions-legales': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
