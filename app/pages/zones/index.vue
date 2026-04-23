<script setup lang="ts">
import { villeList } from '~/data/villes'

const SITE_URL = 'https://terrassement.td-locationbenne37.fr'

useSeoMeta({
  title: 'Zones d\'intervention — Terrassement en Indre-et-Loire | TD Terrassement 37',
  description: 'TD Terrassement 37 intervient à Tours, Joué-lès-Tours, Chinon, Loches et dans toutes les communes d\'Indre-et-Loire. Consultez notre zone de couverture complète.',
  ogTitle: 'Zones d\'intervention — TD Terrassement 37',
  ogDescription: 'Terrassement, excavation et nivellement dans tout l\'Indre-et-Loire et les départements limitrophes.',
  ogType: 'website',
  ogUrl: `${SITE_URL}/zones`,
  ogImage: `${SITE_URL}/og-default.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zones d\'intervention — TD Terrassement 37',
  twitterDescription: 'Terrassement dans tout l\'Indre-et-Loire et environs. 20 communes desservies.',
  twitterImage: `${SITE_URL}/og-default.jpg`
})

useHead({
  link: [{ rel: 'canonical', href: `${SITE_URL}/zones` }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Zones d\'intervention', item: `${SITE_URL}/zones` }
      ]
    })
  }]
})
</script>

<template>
  <div>
    <section class="hero-gradient text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-green-200 text-sm mb-4">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="text-xs" />
          <span>Zones d'intervention</span>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Zones<br><span style="color: #C4A35A">d'intervention</span></h1>
        <p class="text-green-100 text-lg max-w-2xl">Nous intervenons dans {{ villeList.length }} communes en Indre-et-Loire et dans les départements limitrophes.</p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <NuxtLink
            v-for="ville in villeList"
            :key="ville.slug"
            :to="`/zones/${ville.slug}`"
            class="group bg-stone-50 hover:bg-green-50 border border-stone-100 hover:border-green-300 rounded-xl p-4 transition-all"
          >
            <div class="flex items-start justify-between">
              <div>
                <div class="font-semibold text-stone-900 group-hover:text-green-800 transition-colors">{{ ville.nom }}</div>
                <div class="text-xs text-stone-500 mt-0.5">{{ ville.codePostal }} — {{ ville.departement }}</div>
                <div class="text-xs text-stone-400 mt-1">{{ ville.population }} hab.</div>
              </div>
              <UIcon name="i-lucide-arrow-right" class="text-stone-300 group-hover:text-green-500 transition-colors mt-0.5" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-12 section-earth">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Votre commune n'est pas listée ?</h2>
        <p class="text-stone-600 mb-6">Contactez-nous, nous intervenons également dans de nombreuses autres communes d'Indre-et-Loire et alentours.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <a href="tel:+33601370443" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white" style="background-color: #2D5016">
            <UIcon name="i-lucide-phone" />
            06 01 37 04 43
          </a>
          <UButton to="/contact" label="Formulaire de contact" icon="i-lucide-send" variant="outline" :style="{ borderColor: '#2D5016', color: '#2D5016' }" />
        </div>
      </div>
    </section>
  </div>
</template>
