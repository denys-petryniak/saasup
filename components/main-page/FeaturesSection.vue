<script setup lang="ts">
import type { Card } from '~/types'

interface Props {
  subtitle: string
  title: string
  cards: Card[]
}

defineProps<Props>()
</script>

<template>
  <BaseSection class="features-section">
    <div class="features-section__head">
      <BaseBadge>{{ subtitle }}</BaseBadge>
      <h2 class="features-section__title">
        {{ title }}
      </h2>
    </div>
    <div
      v-if="cards.length"
      class="features-section__cards"
    >
      <SectionCard
        v-for="card in cards"
        :key="card.title"
        :card="card"
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

  &__title {
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
