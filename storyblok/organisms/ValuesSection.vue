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
    <div class="values-section__head">
      <LabelBadge>{{ blok.badge }}</LabelBadge>
      <h2 class="values-section__heading">
        {{ blok.heading }}
      </h2>
    </div>
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
  &__head {
    text-align: center;
  }

  &__heading {
    max-width: convert(900px, 'rem');
    margin: $spacing--4xl auto 0 auto;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
