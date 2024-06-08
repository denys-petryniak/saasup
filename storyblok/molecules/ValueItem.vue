<script setup lang="ts">
import type { ValueItemStoryblok } from '~/component-types-sb'

interface Props {
  blok: ValueItemStoryblok
}

defineProps<Props>()
</script>

<template>
  <div class="value">
    <div v-if="blok.icon?.filename" class="value__image-box">
      <img
        :src="blok.icon.filename"
        :width="50"
        :height="50"
        alt=""
        loading="lazy"
        class="value__icon"
      >
    </div>
    <div class="value__body">
      <h3 class="value__title">
        {{ blok.title }}
      </h3>
      <p class="value__description">
        {{ blok.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
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
