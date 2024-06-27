<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { CareersSectionStoryblok, VacancyStoryblok } from '~/component-types-sb'

interface Props {
  blok: CareersSectionStoryblok
}

const props = defineProps<Props>()

function isStoryblokStory(
  vacancy: string | StoryblokStory<VacancyStoryblok>,
): vacancy is StoryblokStory<VacancyStoryblok> {
  return typeof vacancy !== 'string'
}

const typeCheckedVacancies = computed(() => {
  return (props.blok.vacancies ?? []).filter(isStoryblokStory)
})

const vacancyStaticData = {
  title: 'Can\'t find the position you are looking for?',
  description: 'Don\'t worry, get in touch with us , we are always looking for great team members to join with us.',
}

const { isTabletScreenSizeAndSmaller } = useMedia()
const contentBlockAlignment = computed(() => isTabletScreenSizeAndSmaller.value ? 'center' : 'left')
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="careers-section"
  >
    <div class="careers-section__body">
      <ContentBlock
        v-if="blok.heading"
        :badge="blok.badge"
        :heading="blok.heading"
        :heading-level="blok.heading_level"
        :align="contentBlockAlignment"
        class="careers-section__head"
      />
      <div
        v-if="blok.vacancies?.length"
        class="careers-section__vacancies"
      >
        <VacancyCardDynamic
          v-for="vacancy in typeCheckedVacancies"
          :key="vacancy.uuid"
          :vacancy="vacancy.content"
          :slug="vacancy.full_slug"
        />
        <VacancyCardStatic :vacancy="vacancyStaticData" />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.careers-section {
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  }

  &__vacancies {
    display: flex;
    flex-direction: column;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }
}

@include breakpoint('lg') {
  .careers-section {
    &__body {
      position: relative;
      grid-template-columns: 0.5fr 1fr;
    }

    &__head {
      position: sticky;
      top: $spacing--8xl;
      left: 0;
    }
  }
}
</style>
