<script setup lang="ts">
defineProps<{
  src?: string
  alt: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2'
  rounded?: boolean
}>()
</script>

<template>
  <!-- Image réelle : remplacer src avec le chemin fourni par Nathan -->
  <img
    v-if="src"
    :src="src"
    :alt="alt"
    loading="lazy"
    decoding="async"
    class="w-full h-full object-cover"
    :class="{ 'rounded-2xl': rounded }"
  />
  <!-- Placeholder structuré — retiré dès que src est renseigné -->
  <div
    v-else
    class="w-full flex items-center justify-center bg-stone-100 border-2 border-dashed border-stone-300"
    :class="[rounded ? 'rounded-2xl' : '', aspectRatio ? `aspect-[${aspectRatio}]` : 'aspect-video']"
    :aria-label="alt"
    role="img"
  >
    <div class="text-center text-stone-400 p-6 select-none">
      <UIcon name="i-lucide-image" class="text-3xl mb-2 block mx-auto" />
      <p class="text-xs font-medium">Photo à venir</p>
      <p class="text-xs mt-1 opacity-60 max-w-[160px]">{{ alt }}</p>
    </div>
  </div>
</template>
