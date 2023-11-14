<script setup lang="ts">
import type { LinkStoryblok } from '~/component-types-sb'
import type { FooterData } from '~/types'

interface Props {
  data: FooterData
}

defineProps<Props>()

function getSocialLinkLogo(label: string | undefined): string {
  switch (label) {
    case 'Facebook':
      return 'carbon:logo-facebook'
    case 'Twitter':
      return 'carbon:logo-twitter'
    case 'Linkedin':
      return 'carbon:logo-linkedin'
    case 'Instagram':
      return 'carbon:logo-instagram'
    default:
      return 'carbon:logo-facebook'
  }
}

function getNavigationSlug(navigationItem: LinkStoryblok): string {
  const { slug } = useNavigationSlug(navigationItem)

  return slug
}
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
        <p class="footer__description">
          {{ data.description }}
        </p>
        <div class="footer__contacts">
          <FooterContactBlock
            v-if="data.emails?.length"
            type="email"
            icon-name="carbon:email"
            :links="data.emails"
          />
          <FooterContactBlock
            v-if="data.phones?.length"
            type="phone"
            icon-name="carbon:phone"
            :links="data.phones"
          />
        </div>
      </div>
      <nav class="navigation footer__section">
        <h4 class="navigation__headline">
          {{ data.headline }}
        </h4>
        <menu
          v-if="data.navigation?.length"
          class="navigation__menu"
        >
          <li
            v-for="navigationItem in data.navigation"
            :key="navigationItem._uid"
            class="navigation__item"
          >
            <NuxtLink
              :to="getNavigationSlug(navigationItem)"
              class="navigation__link"
            >
              {{ navigationItem.label }}
            </NuxtLink>
          </li>
        </menu>
      </nav>
      <div class="footer__section">
        <DownloadWidget
          :label="data.widgetLabel"
          :title="data.widgetTitle"
          :description="data.widgetDescription"
          :buttons="data.widgetButtons"
        />
      </div>
    </BaseSection>
    <BaseDivider />
    <div class="footer__copyright">
      <p class="footer__copyright-text">
        {{ data.copyright }}
      </p>
      <div
        v-if="data.socialLinks?.length"
        class="footer__social-links"
      >
        <NuxtLink
          v-for="socialLink in data.socialLinks"
          :key="socialLink._uid"
          :to="socialLink.link.url"
          target="_blank"
          class="footer__social-link"
        >
          <Icon
            :name="getSocialLinkLogo(socialLink.label)"
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

  &__description,
  &__contacts {
    margin-top: $spacing--xlarge;
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
  &__headline {
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
