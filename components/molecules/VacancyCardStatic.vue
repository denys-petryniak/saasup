<script setup lang="ts">
import type { VacancyStoryblok } from '~/component-types-sb'

interface Props {
  vacancy: Pick<VacancyStoryblok, 'title' | 'description'>
  slug?: string
}

withDefaults(defineProps<Props>(), {
  slug: '/careers',
})
</script>

<template>
  <div class="card">
    <h3 class="card__title">
      {{ vacancy.title }}
    </h3>
    <div class="card__description">
      {{ vacancy.description }}
    </div>
    <BaseButton
      :to="prependLeadingSlash(slug)"
      size="md"
      color="light"
      class="card__button"
    >
      View Jobs
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  border: 1px solid $color-border--regular;
  border-radius: $rounded--3xl;
  text-align: center;
  background-color: $color-primary--light;

  &__title,
  &__description {
    color: $color-white--regular;
  }

  &__title {
    margin-top: 0;
  }

  &__description {
    margin: $spacing--2xl 0 0 0;
  }

  &__button {
    margin-top: $spacing--4xl;
  }
}
</style>
