<script setup lang="ts">
import scssVariables from '~/assets/scss/export.module.scss'

const { screenXlarge } = scssVariables

const img = useImage()

const getBodyBackground = computed(() => {
  // TODO: rewrite hardcoded urls
  const bodyBackgroundUrl = img('https://a.storyblok.com/f/245408/1386x705/7ec74d6e7f/body-background.png', {
    format: 'webp',
  })
  const bodyBackgroundDecorUrl = img('https://a.storyblok.com/f/245408/3840x2090/ed23e685ce/body-background-decor.png', {
    format: 'webp',
  })

  return `url('${bodyBackgroundUrl}') no-repeat top right/70%, url('${bodyBackgroundDecorUrl}') no-repeat top right/cover`
})
</script>

<template>
  <Head>
    <Style
      type="text/css"
      :children="`@media (min-width: ${screenXlarge}) { body { background: ${getBodyBackground}; }}`"
    />
  </Head>
</template>
