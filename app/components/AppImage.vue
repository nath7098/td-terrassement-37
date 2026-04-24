<script setup lang="ts">
defineProps<{
  src?: string
  alt: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2'
  rounded?: boolean
}>()
</script>

<template>
  <div
    class="w-full overflow-hidden"
    :class="[rounded ? 'rounded-2xl' : '', aspectRatio ? `aspect-[${aspectRatio}]` : 'aspect-video']"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="w-full h-full object-cover"
    >
    <div
      v-else
      class="w-full h-full flex items-center justify-center bg-stone-100 border-2 border-dashed border-stone-300"
      :aria-label="alt"
      role="img"
    >
      <div class="text-center text-stone-400 p-6 select-none">
        <UIcon
          name="i-lucide-image"
          class="text-3xl mb-2 block mx-auto"
        />
        <p class="text-xs font-medium">
          Photo à venir
        </p>
        <p class="text-xs mt-1 opacity-60 max-w-[160px]">
          {{ alt }}
        </p>
      </div>
    </div>
  </div>
</template>
