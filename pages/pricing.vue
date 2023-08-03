<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  title: 'Pricing',
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <BaseSection>
    <h1>
      This is Pricing page
    </h1>
    (<code>under development</code>)
  </BaseSection>
</template>

<style scoped lang="scss">
</style>
