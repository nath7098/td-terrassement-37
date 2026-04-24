<script setup lang="ts">
const SITE_URL = 'https://terrassement.td-locationbenne37.fr'

useSeoMeta({
  title: 'Nos services — Terrassement, Excavation & Nivellement | TD Terrassement 37',
  description: 'TD Terrassement 37 réalise vos travaux de terrassement général, excavation et nivellement en Indre-et-Loire. Découvrez nos prestations pour particuliers et professionnels.',
  ogTitle: 'Services de terrassement — TD Terrassement 37',
  ogDescription: 'Terrassement général, excavation, nivellement & remblaiement en Indre-et-Loire. Devis gratuit.',
  ogType: 'website',
  ogUrl: `${SITE_URL}/services`,
  ogImage: `${SITE_URL}/og-default.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Services — TD Terrassement 37',
  twitterDescription: 'Terrassement général, excavation, nivellement & remblaiement en Indre-et-Loire.',
  twitterImage: `${SITE_URL}/og-default.jpg`
})

useHead({
  link: [{ rel: 'canonical', href: `${SITE_URL}/services` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': SITE_URL },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Services de terrassement — TD Terrassement 37',
        'itemListElement': [
          {
            '@type': 'ListItem', 'position': 1,
            'item': {
              '@type': 'Service',
              'name': 'Terrassement général',
              'description': 'Préparation complète des terrains : débroussaillage, décapage, mouvements de terres, compactage.',
              'provider': { '@type': 'LocalBusiness', 'name': 'TD Terrassement 37', 'telephone': '+33601370443' },
              'areaServed': 'Indre-et-Loire',
              'serviceType': 'Terrassement général'
            }
          },
          {
            '@type': 'ListItem', 'position': 2,
            'item': {
              '@type': 'Service',
              'name': 'Excavation',
              'description': 'Fouilles en rigole, en grande masse, tranchées réseaux, terrassement piscines et garages enterrés.',
              'provider': { '@type': 'LocalBusiness', 'name': 'TD Terrassement 37', 'telephone': '+33601370443' },
              'areaServed': 'Indre-et-Loire',
              'serviceType': 'Excavation'
            }
          },
          {
            '@type': 'ListItem', 'position': 3,
            'item': {
              '@type': 'Service',
              'name': 'Nivellement & remblaiement',
              'description': 'Mise à niveau de terrain, remblaiement de fouilles, création de talus, préparation de plateformes stabilisées.',
              'provider': { '@type': 'LocalBusiness', 'name': 'TD Terrassement 37', 'telephone': '+33601370443' },
              'areaServed': 'Indre-et-Loire',
              'serviceType': 'Nivellement'
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
    slug: 'terrassement-general',
    color: '#2D5016',
    intro: 'Le terrassement général regroupe l\'ensemble des travaux de préparation de terrain nécessaires avant toute construction ou aménagement.',
    details: [
      'Débroussaillage et défrichage de terrain',
      'Décapage de la terre végétale',
      'Mouvement de terres (déblais/remblais)',
      'Évacuation des matériaux excédentaires',
      'Compactage et préparation de la plateforme',
      'Drainage et gestion des eaux pluviales'
    ]
  },
  {
    icon: 'i-lucide-drill',
    title: 'Excavation',
    slug: 'excavation',
    color: '#4A7C59',
    intro: 'L\'excavation est une opération de creusement précise réalisée pour créer des espaces souterrains ou des tranchées pour différents usages.',
    details: [
      'Fouilles en rigole pour fondations',
      'Fouilles en grande masse pour sous-sols',
      'Tranchées pour réseaux (eau, électricité, gaz)',
      'Terrassement pour piscines et bassins',
      'Création de caves et sous-sols',
      'Excavation pour garages enterrés'
    ]
  },
  {
    icon: 'i-lucide-layers',
    title: 'Nivellement & remblaiement',
    slug: 'nivellement',
    color: '#8B6914',
    intro: 'Le nivellement et le remblaiement permettent de modeler un terrain pour lui donner le profil souhaité et assurer la stabilité des futures constructions.',
    details: [
      'Mise à niveau de terrain (planage)',
      'Remblaiement de fouilles après travaux',
      'Terrassement en déblai et remblai',
      'Création de talus et de buttes',
      'Comblement de puits et fosses',
      'Préparation de plateformes stabilisées'
    ]
  }
]

const faqs = [
  {
    question: 'Quelle est la différence entre terrassement général et excavation ?',
    answer: 'Le terrassement général désigne l\'ensemble des travaux de préparation de terrain (déblai, remblai, compactage). L\'excavation est un creusement précis et localisé pour créer des fondations, des tranchées ou des sous-sols.'
  },
  {
    question: 'Pour quels projets réalisez-vous du terrassement ?',
    answer: 'TD Terrassement 37 intervient pour tous les projets : construction de maison individuelle, piscine, garage enterré, voirie privée, aménagement paysager, travaux agricoles, chantiers BTP professionnels.'
  },
  {
    question: 'Quel est le délai pour démarrer un chantier de terrassement ?',
    answer: 'Le devis est gratuit et fourni sous 24 h. Le délai de démarrage dépend de la disponibilité des équipes et de la taille du chantier. Pour les urgences, nous faisons le maximum pour intervenir rapidement en Indre-et-Loire.'
  },
  {
    question: 'Intervenez-vous hors d\'Indre-et-Loire ?',
    answer: 'Oui, nous intervenons également dans les départements limitrophes : Maine-et-Loire (49), Loir-et-Cher (41) et Vienne (86) pour les chantiers proches de la frontière. Consultez notre page Zones pour la liste complète des communes desservies.'
  }
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.answer }
        }))
      })
    }
  ]
})
</script>

<template>
  <div>
    <section class="hero-gradient text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <nav
          aria-label="Breadcrumb"
          class="flex items-center gap-2 text-green-200 text-sm mb-4"
        >
          <NuxtLink
            to="/"
            class="hover:text-white"
          >Accueil</NuxtLink>
          <UIcon
            name="i-lucide-chevron-right"
            class="text-xs"
          />
          <span>Services</span>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Nos prestations<br><span style="color: #C4A35A">de terrassement</span>
        </h1>
        <p class="text-green-100 text-lg max-w-2xl">
          Expertise et matériel professionnel pour tous vos travaux de terrassement en Indre-et-Loire (37).
        </p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 space-y-12">
        <div
          v-for="s in services"
          :id="s.slug"
          :key="s.slug"
          class="scroll-mt-20"
        >
          <div class="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white"
                  :style="{ backgroundColor: s.color }"
                >
                  <UIcon :name="s.icon" />
                </div>
                <h2 class="text-2xl font-bold text-stone-900">
                  {{ s.title }}
                </h2>
              </div>
              <p class="text-stone-600 leading-relaxed mb-4">
                {{ s.intro }}
              </p>
              <!-- Photo de la prestation — remplacer src avec l'image fournie par Nathan -->
              <AppImage
                :alt="`${s.title} par TD Terrassement 37 en Indre-et-Loire`"
                aspect-ratio="16/9"
                :rounded="true"
                class="mb-6"
              />
              <UButton
                to="/contact"
                label="Demander un devis"
                icon="i-lucide-arrow-right"
                :style="{ backgroundColor: s.color, color: 'white' }"
              />
            </div>
            <div class="bg-stone-50 rounded-2xl p-6">
              <h3 class="font-semibold text-stone-800 mb-4">
                Ce que nous réalisons :
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="d in s.details"
                  :key="d"
                  class="flex items-start gap-2 text-sm text-stone-700"
                >
                  <UIcon
                    name="i-lucide-check-circle"
                    class="text-green-600 mt-0.5 flex-shrink-0"
                  />
                  {{ d }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-stone-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-stone-900 mb-2 text-center">
          Questions fréquentes
        </h2>
        <p class="text-stone-500 text-center mb-10">
          Tout ce que vous devez savoir sur nos prestations de terrassement.
        </p>
        <dl class="space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="bg-white rounded-2xl p-6 shadow-sm border border-stone-100"
          >
            <dt class="font-semibold text-stone-900 flex items-start gap-3 mb-3">
              <UIcon
                name="i-lucide-circle-help"
                class="flex-shrink-0 mt-0.5 text-lg"
                style="color: #2D5016"
              />
              {{ faq.question }}
            </dt>
            <dd class="text-stone-600 leading-relaxed pl-8">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-12 section-earth">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p class="text-stone-600 mb-6">
          Contactez-nous pour discuter de vos besoins. Devis gratuit sous 24h en Indre-et-Loire.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+33601370443"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
            style="background-color: #2D5016"
          >
            <UIcon name="i-lucide-phone" />
            06 01 37 04 43
          </a>
          <UButton
            to="/contact"
            size="lg"
            label="Formulaire de devis"
            icon="i-lucide-send"
            variant="outline"
            :style="{ borderColor: '#2D5016', color: '#2D5016' }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
