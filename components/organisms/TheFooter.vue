<script setup lang="ts">
import type { ConfigStoryblok } from '~/component-types-sb'

interface Props {
  config: ConfigStoryblok
}

const props = defineProps<Props>()

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

const copyright = computed(() => {
  return renderRichText(props.config.footer_copyright_text)
})

const localePath = useLocalePath()
</script>

<template>
  <BaseContainer>
    <footer class="footer">
      <LineDivider />
      <div class="footer__body">
        <div class="footer__section">
          <AppLogoLink loading="lazy" />
          <p class="footer__description">
            {{ config.footer_description }}
          </p>
          <div class="footer__contacts">
            <FooterContactBlock
              v-if="config.footer_emails?.length"
              link-type="email"
              icon-name="carbon:email"
              :links="config.footer_emails"
            />
            <FooterContactBlock
              v-if="config.footer_phones?.length"
              link-type="phone"
              icon-name="carbon:phone"
              :links="config.footer_phones"
            />
          </div>
        </div>
        <nav class="navigation footer__section" aria-label="Primary">
          <p class="title navigation__headline">
            {{ config.footer_nav_headline }}
          </p>
          <ul
            v-if="config.footer_nav?.length"
            class="navigation__menu"
          >
            <li
              v-for="navigationItem in config.footer_nav"
              :key="navigationItem._uid"
              class="navigation__item"
            >
              <NuxtLink
                :to="localePath(getNavigationSlug(navigationItem))"
                class="navigation__link"
              >
                {{ navigationItem.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div v-if="config.download_widget_label" class="footer__section">
          <DownloadWidget
            :label="config.download_widget_label"
            :title="config.download_widget_title"
            :description="config.download_widget_description"
            :buttons="config.download_widget_buttons"
          />
        </div>
      </div>
      <LineDivider />
      <div class="footer__info">
        <div v-if="config.footer_copyright_text" v-html="copyright" />
        <div
          v-if="config.footer_social_links?.length"
          class="footer__social-links"
        >
          <NuxtLink
            v-for="socialLink in config.footer_social_links"
            :key="socialLink._uid"
            :to="localePath(socialLink.link.url)"
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

  &__info {
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl) 0;
    text-align: center;
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
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--condensed,
      $max-line-height: $leading--snug
    );

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

    &__info {
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
