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
    <div class="grid-section__head">
      <LabelBadge v-if="blok.badge">
        {{ blok.badge }}
      </LabelBadge>
      <h2 class="grid-section__heading">
        {{ blok.heading }}
      </h2>
    </div>
    <GridBox
      v-if="blok.cards?.length"
      class="grid-section__cards"
    >
      <GridCard
        v-for="card in blok.cards"
        :key="card._uid"
        :blok="card"
      />
    </GridBox>
  </BaseSection>
</template>

<style scoped lang="scss">
.grid-section {
  &__head {
    text-align: center;
  }

  &__heading {
    margin-top: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }

  &__cards {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
