const villeSlugs = [
  'azay-le-rideau','blois','bourgueil','chateau-la-valliere','chateaurenault',
  'chatellerault','chinon','descartes','fondettes','joue-les-tours',
  'la-ville-aux-dames','langeais','loches','loudun','montlouis-sur-loire',
  'notre-dame-doe','saumur','savonnieres','tours','vendome'
]

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
    strictNuxtContentPaths: false,
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/services', priority: 0.9, changefreq: 'monthly' },
      { loc: '/zones', priority: 0.9, changefreq: 'monthly' },
      { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
      ...villeSlugs.map(slug => ({
        loc: `/zones/${slug}`,
        priority: 0.8,
        changefreq: 'monthly' as const,
        lastmod: new Date().toISOString().split('T')[0]
      }))
    ]
  },

  robots: {
    disallow: []
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'geo.region', content: 'FR-37' },
        { name: 'geo.placename', content: 'Fondettes, Indre-et-Loire' },
        { name: 'geo.position', content: '47.4019;0.6031' },
        { name: 'ICBM', content: '47.4019, 0.6031' }
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
