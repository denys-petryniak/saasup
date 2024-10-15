<script setup lang="ts">
import type { PricingPlanHeroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingPlanHeroSectionStoryblok
}

defineProps<Props>()

const { price, features } = inject(pricingPlanGeneralDataInjectionKey) as PricingPlanGeneralData
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="pricing-plan"
  >
    <div class="pricing-plan__body">
      <ContentBlock
        v-if="blok.heading"
        :title="blok.heading"
        :title-level="blok.heading_level ?? 'h1'"
        :description="blok.description"
        :align="{ mobile: 'center', laptop: 'left' }"
        class="pricing-plan__content"
      >
        <template #footer>
          <ul
            v-if="features?.length"
            class="pricing-plan__features"
          >
            <li
              v-for="feature in features"
              :key="feature"
              class="pricing-plan__feature"
            >
              <Icon
                name="material-symbols:check-circle-outline-rounded"
                class="pricing-plan__feature-icon"
                size="1.5em"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </template>
      </ContentBlock>
      <PlanDurationWidget
        :title="blok.heading"
        :price="price"
        class="pricing-plan__plan-duration-widget"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.pricing-plan {
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);

    @include breakpoint('lg') {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__features {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__feature {
    display: flex;
    align-items: center;
    text-align: left;

    &:not(:first-child) {
      margin-top: $spacing--2xl;
    }
  }

  &__feature-icon {
    flex-shrink: 0;
    margin-right: $spacing--md;
    color: $icon-color--enabled;
  }
}
</style>
