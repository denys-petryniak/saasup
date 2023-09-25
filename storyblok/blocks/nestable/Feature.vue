<script setup lang="ts">
import type { FeatureStoryblok } from '~/component-types-sb'

interface Props {
  blok: FeatureStoryblok
}

const props = defineProps<Props>()

const getCardDescription = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <div
    v-editable="blok"
    class="card"
  >
    <NuxtImg
      v-if="blok.image?.filename"
      :src="blok.image.filename"
      :width="2000"
      :height="1500"
      :alt="blok.image.alt"
      format="avif,webp"
      sizes="xs:100vw sm:360px"
      loading="lazy"
      class="card__image"
    />
    <h3 class="card__heading">
      {{ blok.heading }}
    </h3>
    <div
      class="card__description"
      v-html="getCardDescription"
    />
    <NuxtLink
      to="/features"
      class="card__link"
    >
      {{ blok.linkText }}
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

  &__heading {
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
