<script setup lang="ts">
import type { PaymentMethods, PricingPlan } from '~/types'

interface Props {
  subtitle: string
  title: string
  description: string
  paymentMethods: PaymentMethods
  pricingPlans: PricingPlan[]
}

defineProps<Props>()
</script>

<template>
  <BaseSection class="pricing-section">
    <div class="pricing-section__content">
      <BaseBadge>{{ subtitle }}</BaseBadge>
      <h2 class="pricing-section__title">
        {{ title }}
      </h2>
      <p class="pricing-section__description">
        {{ description }}
      </p>
      <div class="payment-methods pricing-section__payment-methods">
        <h3 class="payment-methods__title">
          {{ paymentMethods.title }}
        </h3>
        <div class="payment-methods__images-container">
          <img
            v-for="paymentMethodsImage in paymentMethods.images"
            :key="paymentMethodsImage.src"
            :src="paymentMethodsImage.src"
            :width="paymentMethodsImage.width"
            :height="paymentMethodsImage.height"
            :alt="paymentMethodsImage.alt"
            :title="paymentMethodsImage.alt"
            class="payment-methods__image"
          >
        </div>
      </div>
    </div>
    <div
      v-if="pricingPlans.length"
      class="pricing-section__plans"
    >
      <PricingPlanCard
        v-for="pricingPlan in pricingPlans"
        :key="pricingPlan.title"
        :card="pricingPlan"
        class="pricing-section__plans-item"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.pricing-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing--2xlarge;

  &__content {
    text-align: center;
  }

  &__plans {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: $spacing--xlarge;
  }

  &__plans-item {
    flex: 1 1 convert(250px, 'rem');
  }

  &__title {
    margin-top: $spacing--xlarge;
  }
}

.payment-methods {
  margin-top: $spacing--xlarge;

  &__images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--medium;
    padding: $spacing--large $spacing--medium;
    border-radius: $border-radius--large;
    background-color: $color--secondary--extra-light;
  }
}

@include breakpoint('large') {
  .pricing-section {
    grid-template-columns: 0.5fr 1fr;

    &__content {
      text-align: start;
    }
  }
}
</style>
