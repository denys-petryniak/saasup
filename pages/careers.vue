<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  title: 'Careers',
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <BaseSection>
    <h1>
      This is Careers page
    </h1>
    (<code>under development</code>)
  </BaseSection>
</template>

<style scoped lang="scss">
</style>
