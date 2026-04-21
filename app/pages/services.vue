<script setup lang="ts">
useSeoMeta({
  title: 'Nos services — Terrassement, Excavation & Nivellement | TD Terrassement 37',
  description: 'TD Terrassement 37 réalise vos travaux de terrassement général, excavation et nivellement en Indre-et-Loire. Découvrez nos prestations pour particuliers et professionnels.',
  ogTitle: 'Services de terrassement — TD Terrassement 37',
  ogDescription: 'Terrassement général, excavation, nivellement & remblaiement en Indre-et-Loire.',
  ogType: 'website'
})
useHead({ link: [{ rel: 'canonical', href: 'https://terrassement.td-locationbenne37.fr/services' }] })

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
</script>

<template>
  <div>
    <section class="hero-gradient text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-4">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="text-xs" />
          <span>Services</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nos prestations<br><span style="color: #C4A35A">de terrassement</span></h1>
        <p class="text-green-100 text-lg max-w-2xl">Expertise et matériel professionnel pour tous vos travaux de terrassement en Indre-et-Loire (37).</p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 space-y-12">
        <div v-for="s in services" :key="s.slug" :id="s.slug" class="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white" :style="{ backgroundColor: s.color }">
                <UIcon :name="s.icon" />
              </div>
              <h2 class="text-2xl font-bold text-stone-900">{{ s.title }}</h2>
            </div>
            <p class="text-stone-600 leading-relaxed mb-6">{{ s.intro }}</p>
            <UButton to="/contact" label="Demander un devis" icon="i-lucide-arrow-right" :style="{ backgroundColor: s.color, color: 'white' }" />
          </div>
          <div class="bg-stone-50 rounded-2xl p-6">
            <h3 class="font-semibold text-stone-800 mb-4">Ce que nous réalisons :</h3>
            <ul class="space-y-2">
              <li v-for="d in s.details" :key="d" class="flex items-start gap-2 text-sm text-stone-700">
                <UIcon name="i-lucide-check-circle" class="text-green-600 mt-0.5 flex-shrink-0" />
                {{ d }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 section-earth">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Prêt à démarrer votre projet ?</h2>
        <p class="text-stone-600 mb-6">Contactez-nous pour discuter de vos besoins. Devis gratuit sous 24h en Indre-et-Loire.</p>
        <UButton to="/contact" size="lg" label="Obtenir un devis gratuit" icon="i-lucide-phone" :style="{ backgroundColor: '#2D5016', color: 'white' }" />
      </div>
    </section>
  </div>
</template>
