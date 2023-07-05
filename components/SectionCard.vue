<script setup lang="ts">
interface CardImage {
  src: string
  alt: string
}

interface Props {
  title: string
  description: string
  img: CardImage
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <img class="card__image" :src="img.src" :alt="img.alt">
    <h3 class="card__title">
      {{ title }}
    </h3>
    <p class="card__description">
      {{ description }}
    </p>
    <NuxtLink to="/features" class="card__link">
      Learn More
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

  &:hover {
    background-color: $color--secondary--extra-light;
  }
}
</style>
