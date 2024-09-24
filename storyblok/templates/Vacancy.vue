<script setup lang="ts">
import type { VacancyStoryblok } from '~/component-types-sb'

interface Props {
  blok: VacancyStoryblok
}

const props = defineProps<Props>()

const vacancyContent = computed(() => {
  return renderRichText(props.blok.content)
})
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
          to="/contacts"
          size="md"
          class="vacancy__button"
        >
          Apply Job
        </BaseButton>
      </div>
      <div
        class="vacancy__body rich-text"
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
    border-radius: $rounded--3xl * 2;
    background-color: $color--secondary--extra-light;
  }
}
</style>
