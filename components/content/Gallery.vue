<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>

<template>
  <section class="gallery">
    <div class="layout">
      <NuxtImg
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="gallery-image"
      />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.gallery': {
    '.layout': {
      display: 'grid',
      gap: '{space.8}',
      my: '{space.16}',
      '--cols': 1,
      gridTemplateColumns: 'repeat(var(--cols), minmax(0, 1fr))',
      '@md': {
        '--cols': (props) => props.images.length < 2 ? props.images.length : 2
      },
      '.gallery-image': {
        width: '100%',
        height: 'auto',
        borderRadius: '{radii.md}'
      }
    }
  }
})
</style> 