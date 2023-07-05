<script setup lang="ts">
const heroSection = ref({
  title: 'We make your digital business very easy!',
  description: 'Make your work easier with an integrated ecosystem that lets all departments work properly together.',
})

const featuresSection = ref({
  subtitle: 'Features',
  title: 'Powerful features to boost your productivity',
  cards: [
    {
      title: 'Task Management',
      description: 'The process of managing a task through its life cycle. It involves planning, testing, tracking.',
      img: {
        src: '/images/main-page/task-management-card.png',
        alt: 'Alt 1',
      },
    },
    {
      title: 'Automation',
      description: 'The technology by which a process or procedure is performed with minimal human assistance.',
      img: {
        src: '/images/main-page/automation-card.png',
        alt: 'Alt 2',
      },
    },
    {
      title: 'Budgeting Tools',
      description: 'Creating plan to spend your money, This spending planer is called a budgeting tool for business.',
      img: {
        src: '/images/main-page/budgeting-tools-card.png',
        alt: 'Alt 3',
      },
    },

  ],
})

useHead({
  bodyAttrs: {
    class: 'body-background',
  },
})
</script>

<template>
  <MainPageHeroSection
    :title="heroSection.title"
    :description="heroSection.description"
  />
  <MainPageFeaturesSection
    :subtitle="featuresSection.subtitle"
    :title="featuresSection.title"
    :cards="featuresSection.cards"
  />
</template>
