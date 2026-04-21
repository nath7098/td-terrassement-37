<script setup lang="ts">
import { getVilleBySlug, villeList } from '~/data/villes'

const route = useRoute()
const slug = route.params.ville as string
const ville = getVilleBySlug(slug)

if (!ville) {
  throw createError({ statusCode: 404, message: 'Ville non trouvée' })
}

const nearbyVilles = villeList.filter(v => ville.villesProches.includes(v.slug))

const canonicalUrl = `https://terrassement.td-locationbenne37.fr/zones/${slug}`
const title = `Terrassement ${ville.nom} (${ville.codePostal}) — TD Terrassement 37 | Excavation & Nivellement`
const description = ville.metaDescription

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonicalUrl
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Terrassement ${ville.nom}`,
        description: `Services de terrassement, excavation et nivellement à ${ville.nom}`,
        provider: {
          '@type': 'LocalBusiness',
          name: 'TD Terrassement 37',
          url: 'https://terrassement.td-locationbenne37.fr',
          sameAs: ['https://share.google/QKpfCyuEupbTsyRvt', 'https://td-locationbenne37.fr']
        },
        areaServed: {
          '@type': 'City',
          name: ville.nom,
          postalCode: ville.codePostal
        },
        serviceType: 'Terrassement'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://terrassement.td-locationbenne37.fr' },
          { '@type': 'ListItem', position: 2, name: 'Zones', item: 'https://terrassement.td-locationbenne37.fr/zones' },
          { '@type': 'ListItem', position: 3, name: ville.nom, item: canonicalUrl }
        ]
      })
    }
  ]
})
</script>

<template>
  <div v-if="ville">
    <!-- Hero -->
    <section class="hero-gradient text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <nav class="flex items-center gap-2 text-green-200 text-sm mb-4">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="text-xs" />
          <NuxtLink to="/zones" class="hover:text-white">Zones</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="text-xs" />
          <span>{{ ville.nom }}</span>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Terrassement <span style="color: #C4A35A">{{ ville.displayName }}</span><br>
          <span class="text-2xl font-normal text-green-100">en {{ ville.departement }}</span>
        </h1>
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="bg-white/10 rounded-full px-3 py-1 text-sm flex items-center gap-1">
            <UIcon name="i-lucide-map-pin" class="text-xs" />
            {{ ville.codePostal }}
          </span>
          <span class="bg-white/10 rounded-full px-3 py-1 text-sm flex items-center gap-1">
            <UIcon name="i-lucide-users" class="text-xs" />
            {{ ville.population }} hab.
          </span>
        </div>
        <div class="flex flex-wrap gap-3">
          <UButton to="/contact" label="Devis gratuit" icon="i-lucide-phone" :style="{ backgroundColor: '#C4A35A', color: 'white' }" class="font-semibold" />
          <UButton to="/services" label="Nos services" variant="outline" class="border-white/40 text-white hover:bg-white/10" />
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-bold text-stone-900 mb-6">Terrassement {{ ville.displayName }} en {{ ville.departement }}</h2>
            <div class="prose prose-stone max-w-none">
              <p v-for="paragraph in ville.contenuUnique.split('\n\n')" :key="paragraph" class="text-stone-700 leading-relaxed mb-4">
                {{ paragraph }}
              </p>
            </div>

            <div v-if="ville.quartiers.length" class="mt-8 bg-stone-50 rounded-xl p-6">
              <h3 class="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-map" style="color: #2D5016" />
                Secteurs couverts {{ ville.displayName }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="q in ville.quartiers"
                  :key="q"
                  class="bg-white border border-stone-200 rounded-lg px-3 py-1 text-sm text-stone-700"
                >
                  {{ q }}
                </span>
              </div>
            </div>

            <div class="mt-8 p-6 rounded-xl text-white" style="background-color: #2D5016">
              <h3 class="font-semibold mb-2">Intervention à {{ ville.nom }} — Devis gratuit</h3>
              <p class="text-green-100 text-sm mb-4">Vous avez un projet de terrassement {{ ville.displayName }} ? Contactez-nous pour un devis gratuit et personnalisé.</p>
              <UButton to="/contact" label="Nous contacter maintenant" icon="i-lucide-arrow-right" :style="{ backgroundColor: '#C4A35A', color: 'white' }" />
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-stone-50 rounded-xl p-5">
              <h3 class="font-semibold text-stone-800 mb-4">Nos prestations {{ ville.displayName }}</h3>
              <ul class="space-y-3">
                <li class="flex items-center gap-2 text-sm text-stone-700">
                  <UIcon name="i-lucide-check" style="color: #4A7C59" />
                  Terrassement général
                </li>
                <li class="flex items-center gap-2 text-sm text-stone-700">
                  <UIcon name="i-lucide-check" style="color: #4A7C59" />
                  Excavation & fouilles
                </li>
                <li class="flex items-center gap-2 text-sm text-stone-700">
                  <UIcon name="i-lucide-check" style="color: #4A7C59" />
                  Nivellement de terrain
                </li>
                <li class="flex items-center gap-2 text-sm text-stone-700">
                  <UIcon name="i-lucide-check" style="color: #4A7C59" />
                  Remblaiement & compactage
                </li>
              </ul>
            </div>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 class="font-semibold text-amber-900 mb-2">Avis clients</h3>
              <p class="text-amber-800 text-sm mb-3">Consultez les avis de nos clients sur Google Business.</p>
              <UButton
                to="https://share.google/QKpfCyuEupbTsyRvt"
                target="_blank"
                rel="noopener"
                label="Voir les avis Google"
                icon="i-simple-icons-google"
                size="sm"
                :style="{ backgroundColor: '#C4A35A', color: 'white' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nearby cities -->
    <section v-if="nearbyVilles.length" class="py-12 section-earth">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-xl font-bold text-stone-900 mb-6">Communes proches desservies</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <NuxtLink
            v-for="v in nearbyVilles"
            :key="v.slug"
            :to="`/zones/${v.slug}`"
            class="group bg-white border border-stone-100 hover:border-green-300 rounded-xl p-4 transition-all hover:bg-green-50"
          >
            <div class="font-medium text-stone-800 group-hover:text-green-800 text-sm">{{ v.nom }}</div>
            <div class="text-xs text-stone-400 mt-0.5">{{ v.codePostal }}</div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
