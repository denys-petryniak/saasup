<script setup lang="ts">
import type { ValuesSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: ValuesSectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="values-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :badge="blok.badge"
      :heading="blok.heading"
      :heading-level="blok.heading_level"
      :align="blok.alignment ?? 'center'"
    />
    <div
      v-if="blok.values?.length"
      class="values-section__cards"
    >
      <ValueItem
        v-for="value in blok.values"
        :key="value._uid"
        :blok="value"
        class="values-section__value"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.values-section {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
