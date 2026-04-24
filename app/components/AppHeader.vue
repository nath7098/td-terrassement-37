<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const nav = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Zones d\'intervention', to: '/zones' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 group"
      >
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center"
          style="background-color: #2D5016"
        >
          <UIcon
            name="i-lucide-shovel"
            class="text-white text-xl"
          />
        </div>
        <div>
          <div class="font-bold text-stone-900 leading-tight text-sm">TD Terrassement 37</div>
          <div class="text-xs text-stone-500">Indre-et-Loire</div>
        </div>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="px-3 py-2 text-sm font-medium rounded-lg transition-colors"
          :class="route.path === item.to ? 'bg-green-50 text-green-800' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden md:flex items-center gap-2">
        <a
          href="tel:+33601370443"
          class="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
        >
          <UIcon
            name="i-lucide-phone"
            class="text-green-700"
          />
          06 01 37 04 43
        </a>
        <UButton
          to="/contact"
          size="sm"
          label="Devis gratuit"
          :style="{ backgroundColor: '#2D5016', color: 'white' }"
          class="hover:opacity-90"
        />
      </div>

      <UButton
        class="md:hidden"
        variant="ghost"
        :icon="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
        @click="mobileOpen = !mobileOpen"
      />
    </div>

    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-stone-100 bg-white px-4 py-3 space-y-1"
    >
      <NuxtLink
        v-for="item in nav"
        :key="item.to"
        :to="item.to"
        class="block px-3 py-2 text-sm font-medium rounded-lg text-stone-700 hover:bg-stone-50"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
      <div class="pt-2 flex flex-col gap-2">
        <a
          href="tel:+33601370443"
          class="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-stone-200 text-stone-700 font-semibold text-sm"
        >
          <UIcon
            name="i-lucide-phone"
            style="color: #2D5016"
          />
          06 01 37 04 43
        </a>
        <UButton
          to="/contact"
          block
          label="Devis gratuit"
          :style="{ backgroundColor: '#2D5016', color: 'white' }"
        />
      </div>
    </div>
  </header>
</template>
