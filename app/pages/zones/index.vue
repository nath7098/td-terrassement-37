<script setup lang="ts">
import { villeList } from '~/data/villes'

useSeoMeta({
  title: 'Zones d\'intervention — Terrassement en Indre-et-Loire | TD Terrassement 37',
  description: 'TD Terrassement 37 intervient à Tours, Joué-lès-Tours, Chinon, Loches et dans toutes les communes d\'Indre-et-Loire. Consultez notre zone de couverture complète.',
  ogTitle: 'Zones d\'intervention — TD Terrassement 37',
  ogDescription: 'Terrassement, excavation et nivellement dans tout l\'Indre-et-Loire et les départements limitrophes.',
  ogType: 'website'
})
useHead({ link: [{ rel: 'canonical', href: 'https://terrassement.td-locationbenne37.fr/zones' }] })
</script>

<template>
  <div>
    <section class="hero-gradient text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-4">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="text-xs" />
          <span>Zones d'intervention</span>
        </div>
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
        <UButton to="/contact" label="Nous contacter" icon="i-lucide-phone" :style="{ backgroundColor: '#2D5016', color: 'white' }" />
      </div>
    </section>
  </div>
</template>
