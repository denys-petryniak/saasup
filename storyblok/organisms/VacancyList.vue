<script setup lang="ts">
import type { VacancyListStoryblok } from '~/component-types-sb'

interface Props {
  blok: VacancyListStoryblok
}

defineProps<Props>()

const { vacancies, fetchVacancies } = useFetchVacancies()

await fetchVacancies()
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
  >
    <GridBox
      v-if="vacancies?.length"
      :columns="blok.columns"
    >
      <VacancyCardDynamic
        v-for="vacancy in vacancies"
        :key="vacancy.uuid"
        :blok="vacancy.content"
        :slug="vacancy.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>
