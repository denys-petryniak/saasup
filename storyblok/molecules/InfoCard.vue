<script setup lang="ts">
import type { InfoCardStoryblok } from '~/component-types-sb'

interface Props {
  blok: InfoCardStoryblok
}

const props = defineProps<Props>()

const dynamicInfoCardClasses = computed(() => {
  const orientationClass = props.blok.orientation ? `info-card--${props.blok.orientation}` : null
  const shadowClass = props.blok.shadow ? `info-card--shadow` : null

  return [orientationClass, shadowClass]
})
</script>

<template>
  <div
    v-editable="blok"
    class="info-card"
    :class="dynamicInfoCardClasses"
  >
    <div
      v-if="blok.icon?.filename"
      class="info-card__icon-box"
    >
      <img
        :src="blok.icon.filename"
        :width="50"
        :height="50"
        alt=""
        loading="lazy"
        class="info-card__icon"
      >
    </div>
    <div class="info-card__body">
      <DynamicHeading
        v-if="blok.heading"
        :as="blok.heading_level"
        class="info-card__heading"
      >
        {{ blok.heading }}
      </DynamicHeading>
      <p class="info-card__description">
        {{ blok.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-card {
  display: flex;
  align-items: flex-start;
  gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  border-radius: $rounded--3xl;
  background-color: $color--secondary--extra-light;

  &__icon-box {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    padding: clamped($min-size: $spacing--xl, $max-size: $spacing--4xl);
    border-radius: $rounded--3xl;
    background-color: $color-primary--light;
  }

  &__icon {
    object-fit: contain;
  }

  &__heading {
    margin: 0;
  }

  &__description {
    margin-bottom: 0;
  }

  &--shadow {
    box-shadow: $shadow--regular;
    background-color: $color-white--regular;
  }

  &--vertical {
    flex-direction: column;
  }

  &--horizontal {
    flex-direction: column;

    @include breakpoint('lg') {
      flex-direction: row;
    }
  }
}
</style>
