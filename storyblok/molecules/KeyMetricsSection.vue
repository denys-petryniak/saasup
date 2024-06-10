<script setup lang="ts">
import type { KeyMetricsSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: KeyMetricsSectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="key-metrics-section"
  >
    <div class="key-metrics-section__body">
      <div
        v-for="metric in blok.metrics"
        :key="metric._uid"
        class="metric key-metrics-section__metric"
      >
        <div class="metric__value" v-html="renderRichText(metric.value)" />
        <p class="metric__description">
          {{ metric.description }}
        </p>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.key-metrics-section {
  &__body {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--4xl;
    padding: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
    border-radius: $rounded--3xl * 2;
    background-color: $color--secondary--extra-light;
  }

  &__metric {
    flex: 1 1 convert(220px, 'rem');
  }
}

.metric {
  text-align: center;

  &__value {
    color: $color-primary--dark;
    @include fluid-typography(
      $min-font-size: $text--5xl,
      $max-font-size: $text--7xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--extrabold;

    &::v-deep(p) {
      margin: 0;
    }

    &::v-deep(b) {
      color: $color-primary--light;
    }
  }

  &__description {
    margin: $spacing--sm 0 0 0;
    color: $color-primary--dark;
    @include fluid-typography(
      $min-font-size: $text--xl,
      $max-font-size: $text--2xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--bold;
  }
}
</style>
