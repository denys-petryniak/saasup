<script setup lang="ts">
import type { Card } from '~/types'

interface Props {
  card: Card
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <NuxtImg
      v-if="card.img.src"
      :src="card.img.src"
      :width="card.img.width"
      :height="card.img.height"
      :alt="card.img.alt"
      format="avif,webp"
      sizes="xs:100vw sm:360px"
      loading="lazy"
      class="card__image"
    />
    <h3 class="card__title">
      {{ card.title }}
    </h3>
    <p class="card__description">
      {{ card.description }}
    </p>
    <NuxtLink
      to="/features"
      class="card__link"
    >
      {{ card.linkText }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
$card-padding-y: clamped($min-size: $spacing--xlarge, $max-size: $spacing--3xlarge);
$card-padding-x: clamped($min-size: $spacing--large, $max-size: $spacing--2xlarge);

.card {
  padding: $card-padding-y $card-padding-x;
  text-align: center;
  border-radius: $border-radius--2xlarge;

  &__title {
    margin-top: $spacing--2xlarge;
  }

  &__description {
    margin: $spacing--large 0 0 0;
  }

  &__link {
    display: inline-block;
    margin-top: $spacing--2xlarge;
    text-decoration: underline;
  }

  @media (hover: none) {
    background-color: $color--secondary--extra-light;
  }

  @media (hover: hover) {
    &:hover {
      background-color: $color--secondary--extra-light;
    }
  }
}
</style>
