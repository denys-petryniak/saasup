<script setup lang="ts">
import type { Footer } from '~/types'

interface Props {
  footer: Footer
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
</script>

<template>
  <BaseContainer>
    <footer class="footer">
      <LineDivider />
      <div class="footer__body">
        <div class="footer__section">
          <AppLogoLink loading="lazy" />
          <p class="footer__description">
            {{ footer.description }}
          </p>
          <div class="footer__contacts">
            <FooterContactBlock
              v-if="footer.emails?.length"
              link-type="email"
              icon-name="carbon:email"
              :links="footer.emails"
            />
            <FooterContactBlock
              v-if="footer.phones?.length"
              link-type="phone"
              icon-name="carbon:phone"
              :links="footer.phones"
            />
          </div>
        </div>
        <nav class="navigation footer__section" aria-label="Primary">
          <h4 class="navigation__headline">
            {{ footer.headline }}
          </h4>
          <menu
            v-if="footer.navigation?.length"
            class="navigation__menu"
          >
            <li
              v-for="navigationItem in footer.navigation"
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
        <div v-if="footer.widget" class="footer__section">
          <DownloadWidget
            :label="footer.widget.label"
            :title="footer.widget.title"
            :description="footer.widget.description"
            :buttons="footer.widget.buttons"
          />
        </div>
      </div>
      <LineDivider />
      <div class="footer__copyright">
        <p class="footer__copyright-text">
          {{ footer.copyright }}
        </p>
        <div
          v-if="footer.socialLinks?.length"
          class="footer__social-links"
        >
          <NuxtLink
            v-for="socialLink in footer.socialLinks"
            :key="socialLink._uid"
            :to="socialLink.link.url"
            target="_blank"
            class="footer__social-link"
            :aria-label="`${socialLink.label} social link`"
          >
            <Icon
              :name="getSocialLinkLogo(socialLink.label)"
              size="1.5em"
            />
          </NuxtLink>
        </div>
      </div>
    </footer>
  </BaseContainer>
</template>

<style scoped lang="scss">
.footer {
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: $gap--sm;
    column-gap: $spacing--8xl;
    padding: clamped($min-size: $gap--sm, $max-size: $gap--lg) 0;
  }

  &__description,
  &__contacts {
    margin-top: $spacing--4xl;
  }

  &__copyright {
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl) 0;
    text-align: center;
  }

  &__copyright-text {
    margin: 0;
  }

  &__social-links {
    display: flex;
    justify-content: center;
    gap: $spacing--4xl;
    margin-top: $spacing--4xl;
  }

  &__social-link {
    color: $primary-color--dark;

    &:hover {
      color: $primary-color--light;
    }
  }
}

.navigation {
  &__headline {
    position: relative;
    margin-top: 0;
    padding-bottom: $spacing--2xl;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: $divider-color--regular;
    }
  }

  &__menu {
    padding: 0;
    margin: $spacing--2xl 0 0 0;
    list-style: none;
  }

  &__item {
    font-weight: $font--semibold;

    &:not(:first-child) {
      margin-top: $spacing--sm;
    }
  }

  &__link {
    display: block;
    padding: $spacing--sm 0;
    color: $secondary-color--dark;

    &:hover {
      color: $primary-color--light;
    }
  }
}

@include breakpoint('md') {
  .footer {
    &__body {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include breakpoint('lg') {
  .footer {
    &__body {
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
