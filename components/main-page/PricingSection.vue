<script setup lang="ts">
import type { Payment, PricingPlan } from '~/types'

interface Props {
  subtitle: string
  title: string
  description: string
  payment: Payment
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
      <div class="payment pricing-section__payment">
        <h3 class="payment__title">
          {{ payment.title }}
        </h3>
        <div class="payment__body">
          <div
            v-for="paymentImage in payment.images"
            :key="paymentImage.src"
            class="payment__image-box"
          >
            <img
              :src="paymentImage.src"
              :width="paymentImage.width"
              :height="paymentImage.height"
              :alt="paymentImage.alt"
              :title="paymentImage.alt"
              loading="lazy"
              class="payment__image"
            >
          </div>
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

.payment {
  margin-top: $spacing--xlarge;

  &__body {
    display: flex;
    justify-content: center;
    gap: $spacing--medium;
    padding: $spacing--medium;
    border-radius: $border-radius--large;
    background-color: $color--secondary--extra-light;
  }

  &__image-box {
    max-width: convert(80px, 'rem');
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
