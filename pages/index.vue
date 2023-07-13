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
      img: {
        src: '/images/main-page/task-management-card.png',
        alt: 'Alt 1',
      },
      title: 'Task Management',
      description: 'The process of managing a task through its life cycle. It involves planning, testing, tracking.',
      linkText: 'Learn More',
    },
    {
      img: {
        src: '/images/main-page/automation-card.png',
        alt: 'Alt 2',
      },
      title: 'Automation',
      description: 'The technology by which a process or procedure is performed with minimal human assistance.',
      linkText: 'Learn More',
    },
    {
      img: {
        src: '/images/main-page/budgeting-tools-card.png',
        alt: 'Alt 3',
      },
      title: 'Budgeting Tools',
      description: 'Creating plan to spend your money, This spending planer is called a budgeting tool for business.',
      linkText: 'Learn More',
    },

  ],
})

const platformSection = ref({
  title: 'Powerful and easy to use SaaS platform',
  description: 'Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.',
  cost_title: 'Cost Effective',
  cost_description: 'With tools to make every part of your process more human excited to help.',
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
  <MainPagePlatformSection
    :title="platformSection.title"
    :description="platformSection.description"
    :cost-title="platformSection.cost_title"
    :cost-description="platformSection.cost_description"
  />
</template>
