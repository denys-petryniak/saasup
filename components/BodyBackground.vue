<script setup lang="ts">
import scssVariables from '~/assets/scss/export.module.scss'

const { screenXlarge } = scssVariables

const img = useImage()

const getBodyBackground = computed(() => {
  const bodyBackgroundUrl = img('/images/body-background.png', {
    format: 'webp',
  })
  const bodyBackgroundDecorUrl = img('/images/body-background-decor.png', {
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
