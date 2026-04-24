<script setup lang="ts">
useSeoMeta({
  title: 'Page introuvable (404) — TD Terrassement 37',
  description: 'La page que vous cherchez n\'existe pas. Retournez à l\'accueil ou contactez TD Terrassement 37 au 06 01 37 04 43.'
})
</script>

<template>
  <div>
    <section class="hero-gradient text-white py-24">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p
          class="text-8xl font-bold mb-4"
          style="color: #C4A35A"
        >
          404
        </p>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Page introuvable
        </h1>
        <p class="text-green-100 text-lg max-w-xl mx-auto mb-10">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            to="/"
            label="Retour à l'accueil"
            icon="i-lucide-home"
            size="lg"
            :style="{ backgroundColor: '#C4A35A', color: 'white' }"
          />
          <a
            href="tel:+33601370443"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 text-white hover:bg-white/10 transition-colors"
            style="border-color: rgba(255,255,255,0.4)"
          >
            <UIcon name="i-lucide-phone" />
            06 01 37 04 43
          </a>
        </div>
      </div>
    </section>

    <section class="py-14 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-xl font-bold text-stone-900 mb-6">
          Retrouvez votre chemin
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            to="/services"
            label="Nos services"
            icon="i-lucide-mountain-snow"
            variant="outline"
            :style="{ borderColor: '#2D5016', color: '#2D5016' }"
          />
          <UButton
            to="/zones"
            label="Zones d'intervention"
            icon="i-lucide-map-pin"
            variant="outline"
            :style="{ borderColor: '#2D5016', color: '#2D5016' }"
          />
          <UButton
            to="/contact"
            label="Nous contacter"
            icon="i-lucide-send"
            variant="outline"
            :style="{ borderColor: '#2D5016', color: '#2D5016' }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
