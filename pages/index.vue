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
  costTitle: 'Cost Effective',
  costDescription: 'With tools to make every part of your process more human excited to help.',
})

const stepsSection = ref({
  subtitle: 'How It Work',
  title: 'Work smarter with easy access for user..',
  steps: [
    {
      name: 'Create account',
      icon: {
        src: '/images/main-page/account-icon.svg',
        alt: 'Icon',
      },
      title: 'Create your account & start your work',
      description: 'After learning about your customer service needs, we will get you up and running, and then partner with you problems and keep your customer service organization.',
      image: {
        src: '/images/main-page/account-step.jpg',
        alt: 'Account',
      },
    },
    {
      name: 'Install tracking code',
      icon: {
        src: '/images/main-page/tracking-icon.svg',
        alt: 'Icon',
      },
      title: 'Install the code to organize the works',
      description: 'After learning about your customer service needs, we will get you up and running, and then partner with you your customer service organization.',
      image: {
        src: '/images/main-page/tracking-step.png',
        alt: 'Tracking',
      },
    },
    {
      name: 'Track analytics',
      icon: {
        src: '/images/main-page/analytics-icon.svg',
        alt: 'Icon',
      },
      title: 'Get a free marketing automation guide',
      description: 'Whether it\'s registering a lead for your SaaSup webinar or sending an internal message to your sales team on Slack, SaaSup makes it simple to set up any integration.',
      image: {
        src: '/images/main-page/analytics-step.png',
        alt: 'Analytics',
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
    v-bind="heroSection"
  />
  <MainPageFeaturesSection
    v-bind="featuresSection"
  />
  <MainPagePlatformSection
    v-bind="platformSection"
  />
  <MainPageStepsSection
    v-bind="stepsSection"
  />
</template>
