<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer
    style="background-color: #2D5016"
    class="text-white"
  >
    <div class="max-w-6xl mx-auto px-4 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <UIcon
                name="i-lucide-shovel"
                class="text-white"
              />
            </div>
            <span class="font-bold text-white">TD Terrassement 37</span>
          </div>
          <p class="text-green-100 text-sm leading-relaxed mb-4">
            Entreprise de terrassement professionnelle en Indre-et-Loire. Excavation, nivellement, remblaiement dans tout le département 37.
          </p>
          <ul class="space-y-2 text-sm text-green-100 mb-4">
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-phone"
                class="flex-shrink-0 mt-0.5"
              />
              <a
                href="tel:+33601370443"
                class="hover:text-white transition-colors font-semibold"
              >06 01 37 04 43</a>
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-map-pin"
                class="flex-shrink-0 mt-0.5"
              />
              <span>15 Rue des Rabatteries<br>37230 Fondettes</span>
            </li>
          </ul>
          <UButton
            to="https://share.google/QKpfCyuEupbTsyRvt"
            target="_blank"
            rel="noopener"
            size="xs"
            label="Nos avis Google"
            icon="i-simple-icons-google"
            variant="outline"
            class="border-white/30 text-white hover:bg-white/10"
          />
        </div>

        <div>
          <h3 class="font-semibold text-white mb-4">
            Navigation
          </h3>
          <ul class="space-y-2 text-sm text-green-100">
            <li>
              <NuxtLink
                to="/"
                class="hover:text-white transition-colors"
              >Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="hover:text-white transition-colors"
              >Nos services</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/zones"
                class="hover:text-white transition-colors"
              >Zones d'intervention</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="hover:text-white transition-colors"
              >Contact & devis</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/mentions-legales"
                class="hover:text-white transition-colors"
              >Mentions légales</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-white mb-4">
            Partenaire
          </h3>
          <p class="text-green-100 text-sm mb-3">
            Besoin de louer une benne ? Découvrez notre site partenaire :
          </p>
          <UButton
            to="https://td-locationbenne37.fr"
            target="_blank"
            rel="noopener"
            label="TD Location Benne 37"
            icon="i-lucide-external-link"
            size="sm"
            variant="outline"
            class="border-white/30 text-white hover:bg-white/10 mb-4"
          />
          <div class="mt-4 text-sm text-green-100">
            <p class="flex items-center gap-1.5 mb-1">
              <UIcon
                name="i-lucide-map-pin"
                class="flex-shrink-0"
              /> Indre-et-Loire (37)
            </p>
            <p class="flex items-center gap-1.5">
              <UIcon
                name="i-lucide-phone"
                class="flex-shrink-0"
              /> <a
                href="tel:+33601370443"
                class="hover:text-white transition-colors"
              >06 01 37 04 43</a>
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-green-200">
        <p>© {{ year }} TD Terrassement 37 — 15 Rue des Rabatteries, 37230 Fondettes</p>
        <NuxtLink
          to="/mentions-legales"
          class="hover:text-white transition-colors"
        >Mentions légales</NuxtLink>
      </div>
    </div>
  </footer>
</template>
