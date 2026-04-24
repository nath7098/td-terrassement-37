<script setup lang="ts">
import { villes, type Ville } from '~/data/villes'

const PHONE_INTL = '+33601370443'
const SITE_URL = 'https://terrassement.td-locationbenne37.fr'

useSeoMeta({
  title: 'TD Terrassement 37 — Terrassement, Excavation & Nivellement en Indre-et-Loire',
  description: 'Entreprise de terrassement professionnelle en Indre-et-Loire (37). Terrassement général, excavation, nivellement & remblaiement à Tours et dans tout le département.',
  ogTitle: 'TD Terrassement 37 — Terrassement en Indre-et-Loire',
  ogDescription: 'Excavation, nivellement, remblaiement à Tours et dans tout le 37. Devis gratuit — 06 01 37 04 43.',
  ogType: 'website',
  ogUrl: SITE_URL,
  ogImage: `${SITE_URL}/og-default.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'TD Terrassement 37 — Terrassement en Indre-et-Loire',
  twitterDescription: 'Excavation, nivellement, remblaiement à Tours et dans tout le 37. Devis gratuit.',
  twitterImage: `${SITE_URL}/og-default.jpg`
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'TD Terrassement 37',
        'description': 'Entreprise de terrassement en Indre-et-Loire. Excavation, nivellement, remblaiement.',
        'url': SITE_URL,
        'telephone': PHONE_INTL,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '15 Rue des Rabatteries',
          'addressLocality': 'Fondettes',
          'postalCode': '37230',
          'addressCountry': 'FR'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 47.4019,
          'longitude': 0.6031
        },
        'serviceArea': { '@type': 'State', 'name': 'Indre-et-Loire' },
        'areaServed': 'Indre-et-Loire',
        'sameAs': ['https://share.google/QKpfCyuEupbTsyRvt', 'https://td-locationbenne37.fr'],
        'knowsAbout': ['Terrassement', 'Excavation', 'Nivellement', 'Remblaiement'],
        'priceRange': '€€'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Combien coûte un terrassement en Indre-et-Loire ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Le coût d\'un terrassement dépend de la superficie, du type de sol et de la complexité des travaux. TD Terrassement 37 propose des devis gratuits personnalisés sous 24h. Contactez-nous au 06 01 37 04 43 pour une estimation précise.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quelles zones d\'intervention couvrez-vous ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'TD Terrassement 37 intervient dans tout l\'Indre-et-Loire (37) ainsi que dans les départements limitrophes (Loir-et-Cher, Vienne, Maine-et-Loire). Nous couvrons notamment Tours, Joué-lès-Tours, Fondettes, Chinon, Loches, Saumur et leurs environs.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quels types de travaux de terrassement réalisez-vous ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nous réalisons trois types de travaux : le terrassement général (préparation de terrain, mouvements de terres), l\'excavation (fouilles, tranchées, fondations, piscines) et le nivellement & remblaiement (mise à niveau, remblais, compactage).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Intervenez-vous pour les particuliers et les professionnels ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, TD Terrassement 37 intervient pour les particuliers (construction de maison, piscine, aménagement de jardin) comme pour les professionnels du BTP (fondations, viabilisation, plateformes industrielles).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Comment obtenir un devis de terrassement ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vous pouvez nous contacter par téléphone au 06 01 37 04 43 ou via notre formulaire de contact en ligne. Nous nous engageons à répondre sous 24h ouvrées avec un devis gratuit et sans engagement.'
            }
          }
        ]
      })
    }
  ]
})

const services = [
  {
    icon: 'i-lucide-mountain-snow',
    title: 'Terrassement général',
    desc: 'Préparation complète des terrains pour tous vos projets de construction et d\'aménagement.',
    color: '#2D5016',
    anchor: '#terrassement-general'
  },
  {
    icon: 'i-lucide-drill',
    title: 'Excavation',
    desc: 'Fouilles précises pour fondations, tranchées, sous-sols et tous travaux souterrains.',
    color: '#4A7C59',
    anchor: '#excavation'
  },
  {
    icon: 'i-lucide-layers',
    title: 'Nivellement & remblaiement',
    desc: 'Mise à niveau de vos terrains et remblaiement de qualité pour une surface stable.',
    color: '#8B6914',
    anchor: '#nivellement'
  }
]

// Villes stratégiques par ordre de priorité SEO (population + proximité)
const featuredVilleSlugs = ['tours', 'joue-les-tours', 'fondettes', 'chinon', 'loches', 'montlouis-sur-loire']
const featuredVilles = featuredVilleSlugs.map(slug => villes[slug]).filter((v): v is Ville => v !== undefined)

const faq = [
  {
    q: 'Combien coûte un terrassement en Indre-et-Loire ?',
    a: 'Le coût dépend de la superficie, du type de sol et de la complexité. TD Terrassement 37 propose des devis gratuits personnalisés sous 24h. Appelez le 06 01 37 04 43 pour une estimation.'
  },
  {
    q: 'Quelles zones d\'intervention couvrez-vous ?',
    a: 'Tout l\'Indre-et-Loire (37) et les départements limitrophes : Tours, Joué-lès-Tours, Fondettes, Chinon, Loches, Saumur, Blois, Vendôme et environs.'
  },
  {
    q: 'Intervenez-vous pour les particuliers et les professionnels ?',
    a: 'Oui — particuliers (maison, piscine, jardin) comme professionnels du BTP (fondations, viabilisation, plateformes). Tout type de chantier en Indre-et-Loire.'
  },
  {
    q: 'Comment obtenir un devis de terrassement ?',
    a: 'Par téléphone au 06 01 37 04 43 ou via notre formulaire de contact. Réponse garantie sous 24h ouvrées, devis gratuit sans engagement.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-5"
        style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      />
      <div class="max-w-6xl mx-auto px-4 relative">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
              <UIcon name="i-lucide-map-pin" />
              <span>Fondettes — Indre-et-Loire (37) et environs</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Terrassement professionnel<br>
              <span style="color: #C4A35A">en Indre-et-Loire</span>
            </h1>
            <p class="text-xl text-green-100 mb-8 leading-relaxed">
              TD Terrassement 37 réalise tous vos travaux d'excavation, nivellement et remblaiement à Tours et dans l'ensemble du département 37. Devis gratuit, intervention rapide.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                href="tel:+33601370443"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style="background-color: #C4A35A"
              >
                <UIcon name="i-lucide-phone" />
                06 01 37 04 43
              </a>
              <UButton
                to="/contact"
                size="xl"
                label="Devis gratuit"
                icon="i-lucide-send"
                variant="outline"
                class="border-white/40 text-white hover:bg-white/10"
              />
              <UButton
                to="/services"
                size="xl"
                label="Nos prestations"
                variant="outline"
                icon="i-lucide-arrow-right"
                class="border-white/40 text-white hover:bg-white/10"
              />
            </div>
          </div>
          <!-- Photo hero — remplacer src avec l'image fournie par Nathan -->
          <div class="hidden md:block">
            <AppImage
              alt="Chantier de terrassement en Indre-et-Loire — TD Terrassement 37"
              aspect-ratio="4/3"
              :rounded="true"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 section-earth">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-stone-900 mb-3">
            Nos prestations de terrassement
          </h2>
          <p class="text-stone-600 max-w-xl mx-auto">
            Des travaux de terrassement réalisés avec soin et expertise par une équipe locale en Indre-et-Loire.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="s in services"
            :key="s.title"
            :to="`/services${s.anchor}`"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
          >
            <!-- Photo prestation — remplacer src avec l'image fournie par Nathan -->
            <AppImage
              :alt="`${s.title} en Indre-et-Loire — TD Terrassement 37`"
              aspect-ratio="16/9"
              class="w-full"
            />
            <div class="p-6">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white text-xl"
                :style="{ backgroundColor: s.color }"
              >
                <UIcon :name="s.icon" />
              </div>
              <h3 class="text-lg font-bold text-stone-900 mb-2 group-hover:underline">{{ s.title }}</h3>
              <p class="text-stone-600 text-sm leading-relaxed">{{ s.desc }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center mt-8">
          <UButton
            to="/services"
            label="Voir tous nos services"
            icon="i-lucide-arrow-right"
            variant="outline"
            :style="{ borderColor: '#2D5016', color: '#2D5016' }"
          />
        </div>
      </div>
    </section>

    <!-- Zones -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-stone-900 mb-3">
            Zones d'intervention
          </h2>
          <p class="text-stone-600 max-w-xl mx-auto">
            Nous intervenons à Tours et dans tout l'Indre-et-Loire, ainsi que dans les départements limitrophes.
          </p>
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
          <UButton
            to="/zones"
            label="Toutes nos zones"
            icon="i-lucide-map"
            :style="{ backgroundColor: '#2D5016', color: 'white' }"
          />
        </div>
      </div>
    </section>

    <!-- CTA + partner link -->
    <section
      class="py-16"
      style="background-color: #F5F0E8"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-stone-900 mb-3">
              Demandez un devis gratuit
            </h2>
            <p class="text-stone-600 mb-6">
              Décrivez votre projet de terrassement et recevez une réponse rapide de notre équipe en Indre-et-Loire.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                href="tel:+33601370443"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-white"
                style="background-color: #2D5016"
              >
                <UIcon name="i-lucide-phone" />
                06 01 37 04 43
              </a>
              <UButton
                to="/contact"
                label="Formulaire de contact"
                icon="i-lucide-send"
                variant="outline"
                :style="{ borderColor: '#2D5016', color: '#2D5016' }"
              />
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-8 shadow-sm border-l-4"
            style="border-color: #C4A35A"
          >
            <h2 class="text-2xl font-bold text-stone-900 mb-3">
              Besoin d'une benne ?
            </h2>
            <p class="text-stone-600 mb-4">
              Notre partenaire TD Location Benne 37 assure la livraison et la récupération de bennes dans tout le département.
            </p>
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

    <!-- FAQ -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-stone-900 mb-3">
            Questions fréquentes
          </h2>
          <p class="text-stone-600">
            Tout ce que vous devez savoir sur nos prestations de terrassement en Indre-et-Loire.
          </p>
        </div>
        <div class="space-y-4">
          <div
            v-for="item in faq"
            :key="item.q"
            class="bg-stone-50 rounded-xl p-6 border border-stone-100"
          >
            <h3 class="font-semibold text-stone-900 mb-2 flex items-start gap-2">
              <UIcon
                name="i-lucide-help-circle"
                style="color: #2D5016"
                class="flex-shrink-0 mt-0.5"
              />
              {{ item.q }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed pl-6">
              {{ item.a }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
