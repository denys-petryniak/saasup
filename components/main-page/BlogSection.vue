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
  <BaseSection class="blog-section">
    <div class="blog-section__head">
      <BaseBadge>{{ subtitle }}</BaseBadge>
      <h2 class="blog-section__title">
        {{ title }}
      </h2>
    </div>
    <div
      v-if="cards.length"
      class="blog-section__cards"
    >
      <BlogCard
        v-for="card in cards"
        :key="card.title"
        :card="card"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$card-min-width: convert(250px, 'rem');

.blog-section {
  &__head {
    text-align: center;
  }

  &__title {
    margin-top: $spacing--xlarge;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($card-min-width, 1fr));
    gap: $spacing--2xlarge;
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
  }
}
</style>
