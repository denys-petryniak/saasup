<script setup lang="ts">
import type { InfoCardStoryblok } from '~/component-types-sb'

interface Props {
  blok: InfoCardStoryblok
}

defineProps<Props>()
</script>

<template>
  <div class="info-card">
    <div v-if="blok.icon?.filename" class="info-card__image-box">
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
      <!-- TODO: use DynamicHeading component here -->
      <h3 class="info-card__title">
        {{ blok.title }}
      </h3>
      <p class="info-card__description">
        {{ blok.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-card {
  flex: 1 1 convert(450px, 'rem');
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  border-radius: $rounded--3xl;
  background-color: $color--secondary--extra-light;

  &__image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: clamped($min-size: $spacing--xl, $max-size: $spacing--4xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--5xl);
    border-radius: $rounded--3xl;
    background-color: $color-primary--light;
  }

  &__body {
    flex: 1 1 convert(300px, 'rem');
  }

  &__image {
    border-radius: $rounded--2xl * 2;
    object-fit: contain;
  }

  &__title {
    margin: 0;
  }

  &__description {
    margin-bottom: 0;
  }
}
</style>
