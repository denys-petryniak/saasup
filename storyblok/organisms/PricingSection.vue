<script setup lang="ts">
import type { PricingSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingSectionStoryblok
}

const props = defineProps<Props>()

const sectionDescription = computed(() =>
  renderRichText(props.blok.description))

const { isTabletScreenSizeAndSmaller } = useMedia()
const contentBlockAlignment = computed(() => isTabletScreenSizeAndSmaller.value ? 'center' : 'left')
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="pricing-section"
  >
    <div class="pricing-section__body">
      <ContentBlock
        v-if="blok.heading"
        :headline="blok.headline"
        :heading="blok.heading"
        :heading-level="blok.heading_level"
        :align="contentBlockAlignment"
      >
        <div v-html="sectionDescription" />
        <template #footer>
          <div class="payment pricing-section__payment">
            <h3 class="payment__title">
              {{ blok.payment_heading }}
            </h3>
            <div
              v-if="blok.payment_images?.length"
              class="payment__body"
            >
              <div
                v-for="paymentImage in blok.payment_images"
                :key="paymentImage.id"
                class="payment__image-box"
              >
                <img
                  :src="paymentImage.filename"
                  :width="480"
                  :height="480"
                  :alt="paymentImage.alt"
                  :title="paymentImage.alt"
                  loading="lazy"
                  class="payment__image"
                >
              </div>
            </div>
          </div>
        </template>
      </ContentBlock>
      <!-- TODO: use GridBox component here -->
      <div
        v-if="blok.pricing_plans?.length"
        class="pricing-section__plans"
      >
        <PricingPlan
          v-for="pricingPlan in blok.pricing_plans"
          :key="pricingPlan._uid"
          :blok="pricingPlan"
          class="pricing-section__plans-item"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.pricing-section {
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);

    @include breakpoint('lg') {
      grid-template-columns: 0.5fr 1fr;
    }
  }

  &__plans {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: $spacing--4xl;
  }

  &__plans-item {
    flex: 1 1 toRem(250px);
  }
}

.payment {
  &__body {
    display: flex;
    justify-content: center;
    gap: $spacing--lg;
    padding: $spacing--lg;
    border-radius: $rounded--3xl;
    background-color: $color--secondary--extra-light;
  }

  &__image-box {
    max-width: toRem(80px);
  }
}
</style>
