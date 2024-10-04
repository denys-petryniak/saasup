<script setup lang="ts">
import type { ContactCardStoryblok } from '~/component-types-sb'

interface Props {
  blok: ContactCardStoryblok
}

const props = defineProps<Props>()

const dynamicContactCardClasses = computed(() => {
  const classes = [
    props.blok.orientation ? `contact-card--${props.blok.orientation}` : null,
    props.blok.shadow ? 'contact-card--shadow' : null,
  ]

  return classes.filter(Boolean)
})

const cardDescription = computed(() => {
  return renderRichText(props.blok.text)
})

const { primaryLightColor, primaryDarkColor } = useAppConfig()

const cardIconBackgroundColor = computed(() => {
  return props.blok.icon_bg?.color || primaryLightColor
})

const cardLinkColor = computed(() => {
  return props.blok.link_color?.color || primaryDarkColor
})
</script>

<template>
  <div
    v-editable="blok"
    class="contact-card"
    :class="dynamicContactCardClasses"
  >
    <div class="contact-card__header">
      <div
        v-if="blok.icon?.filename"
        class="contact-card__icon-box"
      >
        <img
          :src="blok.icon.filename"
          :width="50"
          :height="50"
          alt=""
          class="contact-card__icon"
        >
      </div>
      <DynamicTitle
        v-if="blok.title"
        :as="blok.title_level"
        class="contact-card__title"
      >
        {{ blok.title }}
      </DynamicTitle>
    </div>
    <div v-if="blok.orientation === 'vertical'" class="contact-card__body">
      <div
        v-if="blok.text"
        class="contact-card__description"
        v-html="cardDescription"
      />
    </div>
    <div class="contact-card__footer">
      <NuxtLink
        v-if="blok.link_url"
        :to="resolveLinkUrl(blok.link_url)"
        class="contact-card__link"
      >
        {{ blok.link_label }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

$card-radius--outer: $rounded--3xl * 2;
$card-gap--min: $spacing--2xl;
$card-gap--max: $spacing--4xl;

.contact-card {
  $parent: &;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
  padding: clamped($min-size: $card-gap--min, $max-size: $card-gap--max);
  border-radius: $card-radius--outer;
  background-color: $secondary-color--extra-light;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamped($min-size: $spacing--md, $max-size: $spacing--xl);
  }

  &__icon-box {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    padding: $spacing--lg;
    border-radius: calcInnerRadius($card-radius--outer, $card-gap--min, $card-gap--max);
    background-color: v-bind(cardIconBackgroundColor);
  }

  &__icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  &__title {
    margin: 0;
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--condensed,
      $max-line-height: $leading--snug
    );
  }

  &__description {
    text-align: center;
    font-weight: $font--semibold;

    &::v-deep(p) {
      margin: 0;
    }
  }

  &__link {
    color: v-bind(cardLinkColor);
    font-weight: $font--bold;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &--horizontal {
    @include breakpoint('lg') {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    #{$parent} {
      &__header {
        @include breakpoint('lg') {
          flex-direction: row;
          align-items: center;
        }
      }

      &__title {
        @include fluid-typography(
          $min-font-size: $text--xl,
          $max-font-size: $text--2xl,
          $min-line-height: $leading--tight,
          $max-line-height: $leading--condensed
        );
      }

      &__link {
        font-weight: $font--normal;
      }
    }
  }

  &--shadow {
    box-shadow: $shadow--regular;
    background-color: $color-white;
  }
}
</style>
