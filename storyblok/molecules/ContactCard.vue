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

const { sitePrimaryLightColor } = useAppConfig()

const cardIconBackgroundColor = computed(() => {
  return props.blok.icon_bg?.color ?? sitePrimaryLightColor
})
</script>

<template>
  <div
    v-editable="blok"
    class="contact-card"
    :class="dynamicContactCardClasses"
  >
    <div class="contact-card__body">
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
        <p class="contact-card__caption">
          {{ blok.caption }}
        </p>
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
  </div>
</template>

<style scoped lang="scss">
$card-radius--outer: $rounded--3xl * 2;
$card-gap--min: $spacing--2xl;
$card-gap--max: $spacing--4xl;

.contact-card {
  padding: clamped($min-size: $card-gap--min, $max-size: $card-gap--max);
  border-radius: $card-radius--outer;
  background-color: $color--secondary--extra-light;

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);

    @include breakpoint('lg') {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamped($min-size: $spacing--md, $max-size: $spacing--xl);

    @include breakpoint('lg') {
      flex-direction: row;
    }
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

  &__caption,
  &__link {
    @include fluid-typography(
      $min-font-size: $text--xl,
      $max-font-size: $text--2xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
  }

  &__caption {
    margin: 0;
    font-weight: $font--extrabold;
  }

  &--shadow {
    box-shadow: $shadow--regular;
    background-color: $color-white--regular;
  }
}
</style>
