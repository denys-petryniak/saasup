<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  title: 'Features',
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <BaseSection>
    <h1>
      This is Features page
    </h1>
    (<code>under development</code>)
  </BaseSection>
</template>

<style scoped lang="scss">
</style>
