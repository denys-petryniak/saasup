<script setup lang="ts">
import type { FeaturesSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: FeaturesSectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="features-section"
  >
    <div class="features-section__head">
      <BaseBadge>{{ blok.badge }}</BaseBadge>
      <h2 class="features-section__heading">
        {{ blok.heading }}
      </h2>
    </div>
    <div
      v-if="blok.features?.length"
      class="features-section__cards"
    >
      <Feature
        v-for="feature in blok.features"
        :key="feature._uid"
        :blok="feature"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$card-min-width: convert(250px, 'rem');
.features-section {
  &__head {
    text-align: center;
  }

  &__heading {
    margin-top: $spacing--xlarge;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($card-min-width, 1fr));
    gap: $spacing--large;
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
  }
}
</style>
