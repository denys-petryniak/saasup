<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="pricing-plan"
  >
    <div class="pricing-plan__head">
      <h3 class="pricing-plan__title">
        {{ blok?.title }}
      </h3>
      <BaseBadge
        size="small"
        :color="blok?.popular ? 'purple' : 'white'"
      >
        {{ blok?.caption }}
      </BaseBadge>
    </div>
    <div class="pricing-plan__price-container">
      <p class="pricing-plan__price">
        {{ blok?.price }}
      </p>
      <BaseBadge
        size="small"
        color="orange"
      >
        {{ blok?.billing_description }}
      </BaseBadge>
    </div>
    <ul
      v-if="blok?.features?.length"
      class="pricing-plan__features"
    >
      <li
        v-for="(pricingPlanFeature, index) in blok?.features"
        :key="index"
        class="pricing-plan__features-item"
      >
        {{ pricingPlanFeature }}
      </li>
    </ul>
    <BaseButton :color="blok?.popular ? 'dark' : 'light-bordered'">
      Get Started
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
$card-padding-y: clamped($min-size: $spacing--2xlarge, $max-size: $spacing--3xlarge);
$card-padding-x: clamped($min-size: $spacing--large, $max-size: $spacing--xlarge);

.pricing-plan {
  padding: $card-padding-y $card-padding-x;
  text-align: center;
  background-color: $color--secondary--extra-light;
  border-radius: $border-radius--2xlarge;

  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing--medium;
    padding-bottom: $spacing--xlarge;
  }

  &__title {
    margin: 0;
  }

  &__price-container {
    padding: $spacing--large 0;
    border-top: 1px solid $color-devider--regular;
  }

  &__price {
    margin-top: 0;
    @include fluid-typography(
      $min-font-size: $font-size--2xlarge,
      $max-font-size: $font-size--3xlarge,
      $min-line-height: $line-height--3xsmall,
      $max-line-height: $line-height--medium,
    );
    font-weight: $font-weight--extrabold;
    color: $color--secondary--extra-dark
  }

  &__features {
    padding: $spacing--xlarge 0;
    margin: 0;
    list-style: none;
    border-top: 1px solid $color-devider--regular;
  }

  &__features-item:not(:first-child) {
    margin-top: $spacing--large;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow--regular;
    }
  }
}

@include breakpoint('xlarge') {
  .pricing-plan {
    &__head {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
