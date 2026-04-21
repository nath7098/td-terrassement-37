<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales — TD Terrassement 37',
  description: 'Mentions légales du site TD Terrassement 37, entreprise de terrassement en Indre-et-Loire.',
  robots: 'noindex'
})
useHead({ link: [{ rel: 'canonical', href: 'https://terrassement.td-locationbenne37.fr/mentions-legales' }] })
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-16">
    <div class="flex items-center gap-2 text-stone-500 text-sm mb-8">
      <NuxtLink to="/" class="hover:text-stone-700">Accueil</NuxtLink>
      <UIcon name="i-lucide-chevron-right" class="text-xs" />
      <span>Mentions légales</span>
    </div>

    <h1 class="text-3xl font-bold text-stone-900 mb-8">Mentions légales</h1>

    <div class="prose prose-stone max-w-none space-y-6">
      <section>
        <h2 class="text-xl font-bold text-stone-800 mb-3">Éditeur du site</h2>
        <p class="text-stone-700">
          <strong>TD Terrassement 37</strong><br>
          Site web : <a href="https://terrassement.td-locationbenne37.fr" class="text-green-700 hover:underline">https://terrassement.td-locationbenne37.fr</a><br>
          Activité : Travaux de terrassement en Indre-et-Loire (37)
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-stone-800 mb-3">Hébergement</h2>
        <p class="text-stone-700">Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-stone-800 mb-3">Propriété intellectuelle</h2>
        <p class="text-stone-700">L'ensemble du contenu de ce site (textes, images, structure) est la propriété exclusive de TD Terrassement 37. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-stone-800 mb-3">Données personnelles</h2>
        <p class="text-stone-700">Les informations collectées via le formulaire de contact sont utilisées exclusivement pour traiter votre demande et ne sont jamais transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-stone-800 mb-3">Cookies</h2>
        <p class="text-stone-700">Ce site n'utilise pas de cookies à des fins de traçage ou de publicité. Des cookies techniques essentiels peuvent être utilisés pour le bon fonctionnement du site.</p>
      </section>
    </div>
  </div>
</template>
