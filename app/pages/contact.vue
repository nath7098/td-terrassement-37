<script setup lang="ts">
const SITE_URL = 'https://terrassement.td-locationbenne37.fr'

useSeoMeta({
  title: 'Contact & Devis gratuit — TD Terrassement 37 | Indre-et-Loire',
  description: 'Contactez TD Terrassement 37 pour un devis gratuit. Terrassement, excavation, nivellement en Indre-et-Loire. Appelez le 06 01 37 04 43 ou utilisez notre formulaire.',
  ogTitle: 'Contact — TD Terrassement 37',
  ogDescription: 'Devis gratuit pour vos travaux de terrassement en Indre-et-Loire. 06 01 37 04 43.',
  ogType: 'website',
  ogUrl: `${SITE_URL}/contact`,
  ogImage: `${SITE_URL}/og-default.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact — TD Terrassement 37',
  twitterDescription: 'Devis gratuit pour vos travaux de terrassement en Indre-et-Loire. 06 01 37 04 43.',
  twitterImage: `${SITE_URL}/og-default.jpg`
})
useHead({
  link: [{ rel: 'canonical', href: `${SITE_URL}/contact` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'TD Terrassement 37',
        telephone: '+33601370443',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '15 Rue des Rabatteries',
          addressLocality: 'Fondettes',
          postalCode: '37230',
          addressCountry: 'FR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 47.4019,
          longitude: 0.6031
        },
        url: SITE_URL,
        sameAs: ['https://share.google/QKpfCyuEupbTsyRvt', 'https://td-locationbenne37.fr'],
        areaServed: 'Indre-et-Loire',
        priceRange: '€€'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` }
        ]
      })
    }
  ]
})

const { emailjsPublicKey } = useRuntimeConfig().public

const EMAILJS_SERVICE_ID = 'service_terrassement'
const EMAILJS_TEMPLATE_ID = 'template_td_benne_37'

const form = reactive({
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  commune: '',
  prestation: '',
  message: ''
})

const prestations = [
  'Terrassement général',
  'Excavation',
  'Nivellement & remblaiement',
  'Autre'
]

const submitted = ref(false)
const loading = ref(false)
const sendError = ref('')

const errors = reactive({
  nom: '',
  telephone: '',
  email: '',
  message: ''
})

function validateForm() {
  let valid = true
  errors.nom = form.nom.trim() ? '' : 'Le nom est requis'
  errors.telephone = /^[0-9\s+().-]{8,}$/.test(form.telephone) ? '' : 'Numéro de téléphone invalide'
  errors.email = form.email ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Email invalide') : ''
  errors.message = form.message.trim().length >= 10 ? '' : 'Le message doit faire au moins 10 caractères'
  if (errors.nom || errors.telephone || errors.message) valid = false
  return valid
}

async function handleSubmit() {
  if (loading.value) return
  if (!validateForm()) return
  loading.value = true
  sendError.value = ''

  try {
    const emailjs = await import('@emailjs/browser')
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        nom: form.nom,
        prenom: form.prenom,
        telephone: form.telephone,
        email: form.email,
        commune: form.commune,
        prestation: form.prestation,
        message: form.message,
        type_prestation: 'terrassement'
      },
      { publicKey: emailjsPublicKey }
    )
    submitted.value = true
  } catch {
    sendError.value = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous appeler au 06 01 37 04 43.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <section class="hero-gradient text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-green-200 text-sm mb-4">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="text-xs" />
          <span>Contact</span>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact &<br><span style="color: #C4A35A">Devis gratuit</span></h1>
        <p class="text-green-100 text-lg max-w-xl">Décrivez votre projet et nous vous répondrons rapidement. Intervention en Indre-et-Loire et environs.</p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2">
            <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <UIcon name="i-lucide-check-circle" class="text-green-600 text-4xl mx-auto mb-4" />
              <h2 class="text-xl font-bold text-green-800 mb-2">Message envoyé !</h2>
              <p class="text-green-700">Nous avons bien reçu votre demande et vous répondrons dans les meilleurs délais.</p>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <h2 class="text-xl font-bold text-stone-900 mb-6">Formulaire de demande de devis</h2>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-stone-700 mb-1" for="nom">Nom *</label>
                  <UInput id="nom" v-model="form.nom" placeholder="Dupont" size="lg" :ui="{ base: errors.nom ? 'ring-red-500' : '' }" />
                  <p v-if="errors.nom" class="text-red-500 text-xs mt-1">{{ errors.nom }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-stone-700 mb-1" for="prenom">Prénom</label>
                  <UInput id="prenom" v-model="form.prenom" placeholder="Jean" size="lg" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-stone-700 mb-1" for="telephone">Téléphone *</label>
                <UInput id="telephone" v-model="form.telephone" placeholder="06 01 23 45 67" size="lg" type="tel" :ui="{ base: errors.telephone ? 'ring-red-500' : '' }" />
                <p v-if="errors.telephone" class="text-red-500 text-xs mt-1">{{ errors.telephone }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium text-stone-700 mb-1" for="email">Email</label>
                <UInput id="email" v-model="form.email" placeholder="jean.dupont@email.fr" size="lg" type="email" :ui="{ base: errors.email ? 'ring-red-500' : '' }" />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium text-stone-700 mb-1" for="commune">Commune du chantier</label>
                <UInput id="commune" v-model="form.commune" placeholder="Tours, Fondettes, Chinon…" size="lg" />
              </div>

              <div>
                <label class="block text-sm font-medium text-stone-700 mb-1" for="prestation">Type de prestation</label>
                <USelect id="prestation" v-model="form.prestation" :items="prestations" placeholder="Choisir une prestation" size="lg" />
              </div>

              <div>
                <label class="block text-sm font-medium text-stone-700 mb-1" for="message">Message / description du projet *</label>
                <UTextarea id="message" v-model="form.message" placeholder="Décrivez votre projet : type de travaux, superficie, localisation, contraintes particulières..." :rows="5" size="lg" :ui="{ base: errors.message ? 'ring-red-500' : '' }" />
                <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
              </div>

              <div v-if="sendError" class="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                <UIcon name="i-lucide-alert-circle" class="flex-shrink-0 mt-0.5" />
                {{ sendError }}
              </div>

              <UButton
                type="submit"
                size="lg"
                :loading="loading"
                label="Envoyer ma demande"
                icon="i-lucide-send"
                block
                :style="{ backgroundColor: '#2D5016', color: 'white' }"
                class="hover:opacity-90"
              />
            </form>
          </div>

          <div class="space-y-4">
            <div class="rounded-xl p-5 text-white" style="background-color: #2D5016">
              <h3 class="font-semibold mb-3">Nous appeler directement</h3>
              <a href="tel:+33601370443" class="text-2xl font-bold hover:underline block mb-1">06 01 37 04 43</a>
              <p class="text-green-200 text-xs">Lundi – Vendredi, réponse rapide</p>
            </div>

            <div class="bg-stone-50 rounded-xl p-5">
              <h3 class="font-semibold text-stone-800 mb-4">Informations</h3>
              <ul class="space-y-3 text-sm text-stone-700">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-map-pin" class="mt-0.5 flex-shrink-0" style="color: #2D5016" />
                  <span>15 Rue des Rabatteries<br>37230 Fondettes</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-clock" class="mt-0.5 flex-shrink-0" style="color: #2D5016" />
                  Réponse sous 24h ouvrées
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-badge-check" class="mt-0.5 flex-shrink-0" style="color: #2D5016" />
                  Devis gratuit sans engagement
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-map" class="mt-0.5 flex-shrink-0" style="color: #2D5016" />
                  Indre-et-Loire (37) et environs
                </li>
              </ul>
            </div>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 class="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <UIcon name="i-simple-icons-google" />
                Nos avis Google
              </h3>
              <p class="text-amber-800 text-sm mb-3">Consultez les avis de nos clients sur Google Business.</p>
              <UButton
                to="https://share.google/QKpfCyuEupbTsyRvt"
                target="_blank"
                rel="noopener"
                label="Voir nos avis Google"
                icon="i-simple-icons-google"
                size="sm"
                :style="{ backgroundColor: '#C4A35A', color: 'white' }"
              />
            </div>

            <div class="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 class="font-semibold text-green-800 mb-2">Site partenaire</h3>
              <p class="text-green-700 text-sm mb-3">Besoin de louer une benne ? Découvrez TD Location Benne 37.</p>
              <UButton
                to="https://td-locationbenne37.fr"
                target="_blank"
                rel="noopener"
                label="TD Location Benne 37"
                icon="i-lucide-external-link"
                size="sm"
                :style="{ backgroundColor: '#2D5016', color: 'white' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
