<script setup lang="ts">
import type { GridSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: GridSectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="grid-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :heading="blok.heading"
      :heading-level="blok.heading_level"
      :align="blok.alignment ?? 'center'"
    />
    <GridBox
      v-if="blok.cards?.length"
      :columns="blok.columns"
      class="grid-section__cards"
    >
      <component
        :is="card.component"
        v-for="card in blok.cards"
        :key="card._uid"
        :blok="card"
      />
    </GridBox>
  </BaseSection>
</template>

<style scoped lang="scss">
.grid-section {
  &__cards {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
