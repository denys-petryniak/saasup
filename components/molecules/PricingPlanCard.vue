<script setup lang="ts">
import type { PricingPlanPageStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingPlanPageStoryblok
  slug: string
}

defineProps<Props>()
</script>

<template>
  <div
    v-editable="blok"
    class="pricing-plan"
  >
    <div class="pricing-plan__head">
      <DynamicHeading
        v-if="blok.card_heading"
        :as="blok.card_heading_level"
        class="pricing-plan__heading"
      >
        {{ blok.card_heading }}
      </DynamicHeading>
      <HeadlineBadge
        size="sm"
        :color="blok.popular ? 'purple' : 'white'"
      >
        {{ blok.headline }}
      </HeadlineBadge>
    </div>
    <div class="pricing-plan__price-container">
      <p class="pricing-plan__price">
        {{ blok.price }}
      </p>
      <HeadlineBadge
        size="sm"
        color="orange"
        class="pricing-plan__headline"
      >
        {{ blok.billing_description }}
      </HeadlineBadge>
    </div>
    <ul
      v-if="blok.features?.length"
      class="pricing-plan__features"
    >
      <li
        v-for="feature in blok.features"
        :key="feature"
        class="pricing-plan__features-item"
      >
        {{ feature }}
      </li>
    </ul>
    <BaseButton
      :to="prependLeadingSlash(slug)"
      :color="blok.popular ? 'dark' : 'light-bordered'"
    >
      Get Started
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
$card-padding-y: clamped(
  $min-size: $spacing--8xl,
  $max-size: $spacing--12xl,
);
$card-padding-x: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--4xl,
);

.pricing-plan {
  padding: $card-padding-y $card-padding-x;
  text-align: center;
  background-color: $color--secondary--extra-light;
  border-radius: $rounded--3xl * 2;

  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing--lg;
    padding-bottom: $spacing--4xl;

    @include breakpoint('xl') {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__heading {
    margin: 0;
  }

  &__price-container {
    padding: $spacing--2xl 0;
    border-top: 1px solid $color-devider--regular;
  }

  &__price {
    margin-top: 0;
    font-size: $text--4xl;
    line-height: $leading--tight;
    font-weight: $font--extrabold;
    color: $color--secondary--extra-dark;
  }

  &__headline {
    margin-top: $spacing--lg;
  }

  &__features {
    padding: $spacing--4xl 0;
    margin: 0;
    list-style: none;
    border-top: 1px solid $color-devider--regular;
  }

  &__features-item:not(:first-child) {
    margin-top: $spacing--2xl;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow--regular;
    }
  }
}
</style>
