<script setup lang="ts">
const heroSection = ref({
  title: 'We make your digital business very easy!',
  description: 'Make your work easier with an integrated ecosystem that lets all departments work properly together.',
})
</script>

<template>
  <MainPageHeroSection
    :title="heroSection.title"
    :description="heroSection.description"
  />
  <MainPageFeaturesSection />
</template>
