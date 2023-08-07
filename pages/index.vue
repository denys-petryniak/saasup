<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

const story = await useAsyncStoryblok('home', {
  version: 'draft'
})

const heroSection = ref({
  title: 'We make your digital business very easy!',
  description: 'Make your work easier with an integrated ecosystem that lets all departments work properly together.',
  image: {
    src: '/images/main-page/hero.png',
    width: 1541,
    height: 1168,
    alt: 'Hero image',
  },
})

const featuresSection = ref({
  subtitle: 'Features',
  title: 'Powerful features to boost your productivity',
  cards: [
    {
      img: {
        src: '/images/main-page/task-management-card.png',
        width: 2000,
        height: 1500,
        alt: 'Alt 1',
      },
      title: 'Task Management',
      description: 'The process of managing a task through its life cycle. It involves planning, testing, tracking.',
      linkText: 'Learn More',
    },
    {
      img: {
        src: '/images/main-page/automation-card.png',
        width: 2000,
        height: 1500,
        alt: 'Alt 2',
      },
      title: 'Automation',
      description: 'The technology by which a process or procedure is performed with minimal human assistance.',
      linkText: 'Learn More',
    },
    {
      img: {
        src: '/images/main-page/budgeting-tools-card.png',
        width: 2000,
        height: 1500,
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
  image: {
    src: '/images/main-page/platform.png',
    width: 1504,
    height: 1205,
    alt: 'Platform image',
  },
  cost: {
    title: 'Cost Effective',
    description: 'With tools to make every part of your process more human excited to help.',
    image: {
      src: '/images/main-page/cost-icon.svg',
      width: 96,
      height: 103,
      alt: 'Cost icon',
    },
  },
})

const stepsSection = ref({
  subtitle: 'How It Work',
  title: 'Work smarter with easy access for user..',
  steps: [
    {
      name: 'Create account',
      icon: {
        src: '/images/main-page/account-icon.svg',
        width: 116,
        height: 116,
        alt: 'Icon',
      },
      title: 'Create your account & start your work',
      description: 'After learning about your customer service needs, we will get you up and running, and then partner with you problems and keep your customer service organization.',
      image: {
        src: '/images/main-page/account-step.jpg',
        width: 602,
        height: 339,
        alt: 'Account',
      },
    },
    {
      name: 'Install tracking code',
      icon: {
        src: '/images/main-page/tracking-icon.svg',
        width: 116,
        height: 116,
        alt: 'Icon',
      },
      title: 'Install the code to organize the works',
      description: 'After learning about your customer service needs, we will get you up and running, and then partner with you your customer service organization.',
      image: {
        src: '/images/main-page/tracking-step.png',
        width: 602,
        height: 339,
        alt: 'Tracking',
      },
    },
    {
      name: 'Track analytics',
      icon: {
        src: '/images/main-page/analytics-icon.svg',
        width: 116,
        height: 116,
        alt: 'Icon',
      },
      title: 'Get a free marketing automation guide',
      description: 'Whether it\'s registering a lead for your SaaSup webinar or sending an internal message to your sales team on Slack, SaaSup makes it simple to set up any integration.',
      image: {
        src: '/images/main-page/analytics-step.png',
        width: 602,
        height: 339,
        alt: 'Analytics',
      },
    },
  ],
})

const testimonialsSection = ref({
  subtitle: 'Testimonial',
  title: 'Trusted by millions of creators',
  testimonials: [
    {
      text: 'The perfect tool for our \'Service with Passion\' motto. From day one, SaaSup has inspired our trust and amazement. People often tell us that they love the chat and think it\'s modern - something they have expected from a company.',
      author: {
        name: 'James Toriff',
        photo: {
          src: '/images/main-page/james-toriff.jpg',
          width: 108,
          height: 108,
          alt: 'Account',
        },
        job: 'Developer',
        rating: 4,
      },
    },
    {
      text: 'I was surprised by the high frequency of chats and by how the customers using it got right to the point. SaaSup is the most intuitive and modern live chat we found. Live chat obviously made our users happier and more efficient.',
      author: {
        name: 'Iva Angel',
        photo: {
          src: '/images/main-page/iva-angel.jpg',
          width: 108,
          height: 108,
          alt: 'Account',
        },
        job: 'Business',
        rating: 3,
      },
    },
    {
      text: 'People often tell us that they love the chat and think it\'s modern - something they have expected from a company. The perfect tool for our \'Service with Passion\' motto. From day one, SaaSup has inspired our trust and amazement.',
      author: {
        name: 'Anne Hathaway',
        photo: {
          src: '/images/main-page/anne-hathaway.jpg',
          width: 108,
          height: 108,
          alt: 'Account',
        },
        job: 'Developer',
        rating: 5,
      },
    },
  ],
})

const pricingSection = ref({
  subtitle: 'Pricing',
  title: 'Simple and flexible pricing',
  description: 'Start with Support and build your own custom solution or choose The Suite, our all-in-one saasup package.',
  payment: {
    title: 'Accepted Payment Methods',
    images: [
      {
        src: '/images/main-page/icon-visa.svg',
        width: 480,
        height: 480,
        alt: 'Visa',
      },
      {
        src: '/images/main-page/icon-mastercard.svg',
        width: 480,
        height: 480,
        alt: 'MasterCard',
      },
      {
        src: '/images/main-page/icon-paypal.svg',
        width: 480,
        height: 480,
        alt: 'PayPal',
      },
      {
        src: '/images/main-page/icon-amazon.svg',
        width: 480,
        height: 480,
        alt: 'Amazon',
      },
    ],
  },
  pricingPlans: [
    {
      title: 'Basic',
      caption: 'Save 30%',
      price: '$7.99',
      billingDescription: 'Billed as $96 per year',
      isPopular: false,
      features: [
        {
          text: 'Unlimited members',
        },
        {
          text: 'Unlimited feedback',
        },
        {
          text: 'Weekly team Feedback Friday',
        },
        {
          text: 'Custom Kudos +9 illustration',
        },
        {
          text: 'Team feedback history',
        },
      ],
    },
    {
      title: 'Advanced',
      caption: 'Popular',
      price: '$10.99',
      billingDescription: 'Billed as $199 per year',
      isPopular: true,
      features: [
        {
          text: 'Unlimited members',
        },
        {
          text: 'Unlimited feedback',
        },
        {
          text: 'Weekly team Feedback Friday',
        },
        {
          text: 'Custom Kudos +9 illustration',
        },
        {
          text: 'Team feedback history (30 items)',
        },
        {
          text: 'Personal feedback history (6 items)',
        },
        {
          text: 'Slack integration',
        },
      ],
    },
  ],
})

const ctaSection = ref({
  title: 'Get started a 15-days free trial',
  description: 'Start creating online marketing campaigns for your business with sassup\'s 15-day free trial. No commitment.',
  image: {
    src: '/images/main-page/cta.png',
    width: 1336,
    height: 988,
    alt: 'CTA image',
  },
  backgroundImage: {
    src: '/images/main-page/cta-bg.png',
  },
})

const blogSection = ref({
  subtitle: 'Blog',
  title: 'Recent News',
  cards: [
    {
      img: {
        src: '/images/main-page/productive-thing-blog-post.jpg',
        width: 1194,
        height: 676,
        alt: 'Alt 1',
      },
      date: 'August 6, 2023',
      title: 'Our Favorite Productive Thing Is SaaSup',
      description: 'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the digital divide with DevOps.',
      linkText: 'View More',
    },
    {
      img: {
        src: '/images/main-page/young-startups-blog-post.jpg',
        width: 1194,
        height: 676,
        alt: 'Alt 2',
      },
      date: 'August 12, 2023',
      title: 'Young Startups With SaaSup In Full Throttle',
      description: 'Strategies on low-hanging fruit to identify a ballpark value added activity matrix economically to beta test override the digital divide with DevOps.',
      linkText: 'View More',
    },
  ],
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <BodyBackground />
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
  <MainPageTestimonialsSection
    v-bind="testimonialsSection"
  />
  <MainPagePricingSection
    v-bind="pricingSection"
  />
  <MainPageCTASection
    v-bind="ctaSection"
  />
  <MainPageBlogSection
    v-bind="blogSection"
  />
</template>
