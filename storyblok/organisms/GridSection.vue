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
    :is-top-gap-hidden="blok.hide_top_gap"
    :is-top-double-gap="blok.set_top_double_gap"
    :is-bottom-double-gap="blok.set_bottom_double_gap"
    class="grid-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :title="blok.heading"
      :title-level="blok.heading_level"
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
