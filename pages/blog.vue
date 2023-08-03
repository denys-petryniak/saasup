<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  title: 'Blog',
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <BaseSection>
    <h1>
      This is Blog page
    </h1>
    (<code>under development</code>)
  </BaseSection>
</template>

<style scoped lang="scss">
</style>
