<script setup lang="ts">
import { villeList } from '~/data/villes'

useSeoMeta({
  title: 'TD Terrassement 37 — Terrassement, Excavation & Nivellement en Indre-et-Loire',
  description: 'Entreprise de terrassement professionnelle en Indre-et-Loire (37). Terrassement général, excavation, nivellement & remblaiement à Tours et dans tout le département.',
  ogTitle: 'TD Terrassement 37 — Terrassement en Indre-et-Loire',
  ogDescription: 'Excavation, nivellement, remblaiement à Tours et dans tout le 37. Devis gratuit.',
  ogType: 'website',
  ogUrl: 'https://terrassement.td-locationbenne37.fr'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://terrassement.td-locationbenne37.fr' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'TD Terrassement 37',
      description: 'Entreprise de terrassement en Indre-et-Loire. Excavation, nivellement, remblaiement.',
      url: 'https://terrassement.td-locationbenne37.fr',
      serviceArea: { '@type': 'State', name: 'Indre-et-Loire' },
      sameAs: ['https://share.google/QKpfCyuEupbTsyRvt', 'https://td-locationbenne37.fr'],
      knowsAbout: ['Terrassement', 'Excavation', 'Nivellement', 'Remblaiement'],
      areaServed: 'Indre-et-Loire'
    })
  }]
})

const services = [
  {
    icon: 'i-lucide-mountain-snow',
    title: 'Terrassement général',
    desc: 'Préparation complète des terrains pour tous vos projets de construction et d\'aménagement.',
    color: '#2D5016'
  },
  {
    icon: 'i-lucide-drill',
    title: 'Excavation',
    desc: 'Fouilles précises pour fondations, tranchées, sous-sols et tous travaux souterrains.',
    color: '#4A7C59'
  },
  {
    icon: 'i-lucide-layers',
    title: 'Nivellement & remblaiement',
    desc: 'Mise à niveau de vos terrains et remblaiement de qualité pour une surface stable.',
    color: '#8B6914'
  }
]

const featuredVilles = villeList.slice(0, 6)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />
      <div class="max-w-6xl mx-auto px-4 relative">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
            <UIcon name="i-lucide-map-pin" />
            <span>Indre-et-Loire (37) et environs</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Terrassement professionnel<br>
            <span style="color: #C4A35A">en Indre-et-Loire</span>
          </h1>
          <p class="text-xl text-green-100 mb-8 leading-relaxed">
            TD Terrassement 37 réalise tous vos travaux d'excavation, nivellement et remblaiement à Tours et dans l'ensemble du département 37. Devis gratuit, intervention rapide.
          </p>
          <div class="flex flex-wrap gap-3">
            <UButton to="/contact" size="xl" label="Devis gratuit" icon="i-lucide-phone" :style="{ backgroundColor: '#C4A35A', color: 'white' }" class="hover:opacity-90 font-semibold" />
            <UButton to="/services" size="xl" label="Nos prestations" variant="outline" icon="i-lucide-arrow-right" class="border-white/40 text-white hover:bg-white/10" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 section-earth">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-stone-900 mb-3">Nos prestations de terrassement</h2>
          <p class="text-stone-600 max-w-xl mx-auto">Des travaux de terrassement réalisés avec soin et expertise par une équipe locale en Indre-et-Loire.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="s in services"
            :key="s.title"
            class="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white text-xl" :style="{ backgroundColor: s.color }">
              <UIcon :name="s.icon" />
            </div>
            <h3 class="text-lg font-bold text-stone-900 mb-2">{{ s.title }}</h3>
            <p class="text-stone-600 text-sm leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <UButton to="/services" label="Voir tous nos services" icon="i-lucide-arrow-right" variant="outline" :style="{ borderColor: '#2D5016', color: '#2D5016' }" />
        </div>
      </div>
    </section>

    <!-- Zones -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-stone-900 mb-3">Zones d'intervention</h2>
          <p class="text-stone-600 max-w-xl mx-auto">Nous intervenons à Tours et dans tout l'Indre-et-Loire, ainsi que dans les départements limitrophes.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <NuxtLink
            v-for="ville in featuredVilles"
            :key="ville.slug"
            :to="`/zones/${ville.slug}`"
            class="group bg-stone-50 hover:bg-green-50 border border-stone-100 hover:border-green-200 rounded-xl p-3 text-center transition-all"
          >
            <div class="font-medium text-stone-800 group-hover:text-green-800 text-sm">{{ ville.nom }}</div>
            <div class="text-xs text-stone-400 mt-0.5">{{ ville.codePostal }}</div>
          </NuxtLink>
        </div>
        <div class="text-center">
          <UButton to="/zones" label="Toutes nos zones" icon="i-lucide-map" :style="{ backgroundColor: '#2D5016', color: 'white' }" />
        </div>
      </div>
    </section>

    <!-- CTA + partner link -->
    <section class="py-16" style="background-color: #F5F0E8">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-stone-900 mb-3">Demandez un devis gratuit</h2>
            <p class="text-stone-600 mb-6">Décrivez votre projet de terrassement et recevez une réponse rapide de notre équipe en Indre-et-Loire.</p>
            <UButton to="/contact" label="Nous contacter" icon="i-lucide-send" size="lg" :style="{ backgroundColor: '#2D5016', color: 'white' }" />
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm border-l-4" style="border-color: #C4A35A">
            <h2 class="text-2xl font-bold text-stone-900 mb-3">Besoin d'une benne ?</h2>
            <p class="text-stone-600 mb-4">Notre partenaire TD Location Benne 37 assure la livraison et la récupération de bennes dans tout le département.</p>
            <div class="flex flex-wrap gap-3">
              <UButton
                to="https://td-locationbenne37.fr"
                target="_blank"
                rel="noopener"
                label="TD Location Benne 37"
                icon="i-lucide-external-link"
                :style="{ backgroundColor: '#C4A35A', color: 'white' }"
              />
              <UButton
                to="https://share.google/QKpfCyuEupbTsyRvt"
                target="_blank"
                rel="noopener"
                label="Voir nos avis Google"
                icon="i-simple-icons-google"
                variant="outline"
                :style="{ borderColor: '#C4A35A', color: '#8B6914' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
