<script setup lang="ts">
import type { VacancyStoryblok } from '~/component-types-sb'

interface Props {
  vacancy: VacancyStoryblok
  slug: string
}

defineProps<Props>()
</script>

<template>
  <div v-editable="vacancy" class="card">
    <h3 class="card__title">
      {{ vacancy.title }}
    </h3>
    <div class="card__details">
      <span class="card__location">{{ vacancy.location }}</span>
      <span class="card__separator">|</span>
      <span class="card__employment">{{ vacancy.employment }}</span>
    </div>
    <div class="card__description">
      {{ vacancy.description }}
    </div>
    <BaseButton
      :to="prependLeadingSlash(slug)"
      size="md"
      color="light-bordered"
      class="card__button"
    >
      Apply Job
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  border: 1px solid $color-border--regular;
  border-radius: $rounded--3xl;
  background-color: $color--secondary--extra-light;

  &__title {
    margin-top: 0;
  }

  &__details {
    font-size: $text--xl;
    font-weight: $font--medium;
  }

  &__separator {
    display: none;

    @include breakpoint('sm') {
      display: inline-block;
      margin: 0 $spacing--sm;
    }
  }

  &__location,
  &__employment {
    display: block;
    line-height: $leading--relaxed;

    @include breakpoint('sm') {
      display: inline;
      line-height: $leading--cozy;
    }
  }

  &__location {
    color: $color-primary--dark;
  }

  &__employment {
    color: $color-primary--light;
  }

  &__description {
    margin: $spacing--2xl 0 0 0;
  }

  &__button {
    display: inline-block;
    margin-top: $spacing--4xl;
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba($color: $color-primary--light, $alpha: 0.1);
    }
  }
}
</style>
