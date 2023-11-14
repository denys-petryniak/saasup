<script setup lang="ts">
const { siteTitle } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${siteTitle}` : siteTitle
  },
  meta() {
    const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'

    return isPreview
      ? [
          { hid: 'robots', name: 'robots', content: 'noindex' },
        ]
      : []
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
