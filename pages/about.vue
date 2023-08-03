<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  title: 'About',
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <BaseSection>
    <h1>
      This is About page
    </h1>
    (<code>under development</code>)
  </BaseSection>
</template>

<style scoped lang="scss">
</style>
