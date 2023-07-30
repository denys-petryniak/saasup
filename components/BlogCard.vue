<script setup lang="ts">
import type { Card } from '~/types'

interface Props {
  card: Card
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div class="card__image-box">
      <img
        v-if="card.img"
        :src="card.img.src"
        :alt="card.img.alt"
        class="card__image"
      >
      <BaseButton
        size="small"
        color="light-branded"
        to="/blog"
        class="card__button"
      >
        Social Media
      </BaseButton>
    </div>

    <p class="card__date">
      {{ card.date }}
    </p>
    <NuxtLink
      to="/blog"
    >
      <h3 class="card__title">
        {{ card.title }}
      </h3>
    </NuxtLink>
    <p class="card__description">
      {{ card.description }}
    </p>
    <NuxtLink
      to="/blog"
      class="card__link"
    >
      {{ card.linkText }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
$card-padding-y: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$card-padding-x: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);

.card {
  padding: $card-padding-y $card-padding-x;
  border-radius: $border-radius--2xlarge;
  background-color: $color--secondary--extra-light;

  &__image-box {
    position: relative;
  }

  &__image {
    border-radius: $border-radius--xlarge;
  }

  &__button {
    position: absolute;
    // inset: 0 0 $spacing--medium $spacing--medium;
    bottom: $spacing--medium;
    left: $spacing--medium;
    border-radius: $border-radius--large;
  }

  &__date {
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
    @include fluid-typography(
      $min-font-size: $font-size--base,
      $max-font-size: $font-size--small,
      $min-line-height: $line-height--3xsmall,
      $max-line-height: $line-height--2xsmall,
    );
  }

  &__title {
    margin-top: $spacing--large;
  }

  &__description {
    margin: $spacing--large 0 0 0;
  }

  &__link {
    display: inline-block;
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
    font-weight: $font-weight--bold;
    text-decoration: underline;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow--regular;
    }
  }
}
</style>
