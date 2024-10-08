<script setup lang="ts">
import type { VacancyStoryblok } from '~/component-types-sb'

interface Props {
  blok: VacancyStoryblok
  slug: string
}

defineProps<Props>()

const localePath = useLocalePath()
</script>

<template>
  <div v-editable="blok" class="vacancy-card">
    <DynamicTitle
      v-if="blok.title"
      as="h3"
      class="vacancy-card__title"
    >
      {{ blok.title }}
    </DynamicTitle>
    <VacancyJobDetails
      v-if="blok.location && blok.employment"
      :location="blok.location"
      :employment="blok.employment"
    />
    <p
      v-if="blok.description"
      class="vacancy-card__description"
    >
      {{ blok.description }}
    </p>
    <BaseButton
      :to="localePath(prependLeadingSlash(slug))"
      size="md"
      color="light-bordered"
      class="vacancy-card__button"
    >
      Apply Job
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.vacancy-card {
  padding: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  border: 1px solid $divider-color--regular;
  border-radius: $rounded--3xl;
  background-color: $secondary-color--extra-light;

  &__title {
    margin-top: 0;
  }

  &__description {
    margin: $spacing--2xl 0 0 0;
  }

  &__button {
    margin-top: $spacing--4xl;
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba($color: $primary-color--light, $alpha: 0.1);
    }
  }
}
</style>
