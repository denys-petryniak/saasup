<script setup lang="ts">
const navigationLinks = ref([
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/features',
    text: 'Features',
  },
  {
    to: '/pricing',
    text: 'Pricing',
  },
  {
    to: '/integrations',
    text: 'Integrations',
  },
  {
    to: '/blog',
    text: 'Blog',
  },
  {
    to: '/careers',
    text: 'Careers',
  },
  {

    to: '/contacts',
    text: 'Contacts',
  },
])

const contacts = ref([
  {
    type: 'mail',
    icon: {
      name: 'carbon:email',
    },
    links: [
      {
        to: 'mailto:saasup@gmail.com',
        text: 'saasup@gmail.com',
      },
      {
        to: 'mailto:mail@saasup.com',
        text: 'mail@saasup.com',
      },
    ],

  },
  {
    type: 'tel',
    icon: {
      name: 'carbon:phone',
    },
    links: [
      {
        to: 'tel:+98765413654',
        text: '+987 6541 3654',
      },
      {
        to: 'tel:+00165476589',
        text: '+001 6547 6589',
      },
    ],
  },
])

const socialLinks = ref([
  {
    icon: {
      name: 'carbon:logo-facebook',
    },
    link: {
      to: 'https://facebook.com',
    },
  },
  {
    icon: {
      name: 'carbon:logo-twitter',
    },
    link: {
      to: 'https://twitter.com',
    },
  },
  {
    icon: {
      name: 'carbon:logo-linkedin',
    },
    link: {
      to: 'https://linkedin.com',
    },
  },
  {
    icon: {
      name: 'carbon:logo-instagram',
    },
    link: {
      to: 'https://instagram.com',
    },
  },
])
</script>

<template>
  <footer class="footer">
    <BaseDivider />
    <BaseSection
      tag="div"
      class="footer__wrapper"
    >
      <div class="footer__section">
        <AppLogoLink loading="lazy" />
        <p class="footer__text">
          The Professional SaaS business tool, It will helps to grow your business with more productivity.
        </p>
        <div
          v-if="contacts.length"
          class="footer__contacts"
        >
          <div
            v-for="contact in contacts"
            :key="contact.type"
            class="footer__contact"
          >
            <Icon
              class="footer__contact-icon"
              :name="contact.icon.name"
              size="1.25em"
            />
            <div class="footer__contact-links">
              <NuxtLink
                v-for="link in contact.links"
                :key="link.to"
                :to="link.to"
                no-rel
                class="link footer__contact-link"
              >
                {{ link.text }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <nav class="navigation footer__section">
        <h4 class="navigation__title">
          Pages
        </h4>
        <menu
          v-if="navigationLinks.length"
          class="navigation__menu"
        >
          <li
            v-for="navigationLink in navigationLinks"
            :key="navigationLink.text"
            class="navigation__item"
          >
            <NuxtLink
              :to="navigationLink.to"
              class="navigation__link"
            >
              {{ navigationLink.text }}
            </NuxtLink>
          </li>
        </menu>
      </nav>
      <div class="footer__section">
        <DownloadWidget />
      </div>
    </BaseSection>
    <BaseDivider />
    <div class="footer__copyright">
      <p class="footer__copyright-text">
        Copyright © Saasup | Designed by Victorflow
      </p>
      <div
        v-if="socialLinks.length"
        class="footer__social-links"
      >
        <NuxtLink
          v-for="socialLink in socialLinks"
          :key="socialLink.link.to"
          :to="socialLink.link.to"
          target="_blank"
          class="footer__social-link"
        >
          <Icon
            :name="socialLink.icon.name"
            size="1.5em"
          />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: $gap--small;
    column-gap: $spacing--2xlarge;
  }

  &__text,
  &__contacts {
    margin-top: $spacing--xlarge;
  }

  &__contact {
    display: flex;
    gap: $spacing--medium;

    &:not(:first-child) {
      margin-top: $spacing--medium;
    }
  }

  &__contact-icon {
    position: relative;
    top: $spacing--small;
    color: $color-primary--light;
  }

  &__contact-link {
    display: block;
    color: $color--secondary--dark;

    &:hover {
      color: $color-primary--light;
    }
  }

  &__copyright {
    padding-top: clamped($min-size: $spacing--large, $max-size: $spacing--xlarge);
    text-align: center;
  }

  &__copyright-text {
    margin: 0;
  }

  &__social-links {
    display: flex;
    justify-content: center;
    gap: $spacing--xlarge;
    margin-top: $spacing--xlarge;
  }

  &__social-link {
    color: $color--secondary--extra-dark;

    &:hover {
      color: $color-primary--light;
    }
  }
}

.navigation {
  &__title {
    position: relative;
    margin-top: 0;
    padding-bottom: $spacing--large;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: $color-devider--regular;
    }
  }

  &__menu {
    padding: 0;
    margin: $spacing--large 0 0 0;
    list-style: none;
  }

  &__item {
    font-weight: $font-weight--semibold;

    &:not(:first-child) {
      margin-top: $spacing--small;
    }
  }

  &__link {
    display: block;
    padding: $spacing--small 0;
    color: $color--secondary--dark;

    &:hover {
      color: $color-primary--light;
    }
  }
}

@include breakpoint('medium') {
  .footer {
    &__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include breakpoint('large') {
  .footer {
    &__wrapper {
      grid-template-columns: 0.8fr 0.5fr 1fr;
    }

    &__copyright {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__social-links {
      justify-content: flex-end;
      margin-top: 0;
    }
  }
}
</style>
