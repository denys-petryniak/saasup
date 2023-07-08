<script setup lang="ts">
interface CardImage {
  src: string
  alt: string
}

interface Card {
  title: string
  description: string
  img: CardImage
}

interface Props {
  subtitle: string
  title: string
  cards: Card[]
}

defineProps<Props>()
</script>

<template>
  <BaseSection class="features-section border-debug">
    <div class="features-section__head">
      <SectionSubtitle :text="subtitle" />
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
        :title="card.title"
        :description="card.description"
        :img="card.img"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$card-min-width: 250px;
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
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
  }
}
</style>
