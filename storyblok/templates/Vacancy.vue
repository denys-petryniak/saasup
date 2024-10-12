<script setup lang="ts">
import type { VacancyStoryblok } from '~/component-types-sb'

interface Props {
  blok: VacancyStoryblok
}

const props = defineProps<Props>()

const vacancyContent = computed(() => {
  return renderRichText(props.blok.content)
})

const localePath = useLocalePath()
</script>

<template>
  <article v-editable="blok">
    <BaseSection>
      <div class="vacancy__head">
        <DynamicTitle
          v-if="blok.title"
          :as="blok.title_level"
          class="vacancy__title"
        >
          {{ blok.title }}
        </DynamicTitle>
        <VacancyJobDetails
          v-if="blok.location && blok.employment"
          :location="blok.location"
          :employment="blok.employment"
          class="vacancy__details"
        />
        <BaseButton
          :to="localePath('/contacts')"
          size="md"
          class="vacancy__button"
        >
          {{ $t('button.apply_job') }}
        </BaseButton>
      </div>
      <div
        class="rich-text vacancy__body"
        v-html="vacancyContent"
      />
    </BaseSection>
  </article>
</template>

<style scoped lang="scss">
.vacancy {
  &__head {
    text-align: center;
  }

  &__title {
    margin: 0;
  }

  &__details,
  &__button {
    margin-top: clamped($min-size: $spacing--lg, $max-size: $spacing--xl);
  }

  &__body {
    margin-top: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
    padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--12xl);
    border-radius: calc($rounded--3xl * 2);
    background-color: $secondary-color--extra-light;
  }
}
</style>
