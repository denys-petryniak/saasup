<script setup lang="ts">
import type { PricingPlanListStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingPlanListStoryblok
}

defineProps<Props>()

const { fetchPricingPlans } = useFetchPricingPlans()

const { pricingPlans } = await fetchPricingPlans()
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
  >
    <GridBox
      v-if="pricingPlans?.length"
      :columns="blok.columns"
    >
      <PricingPlanCard
        v-for="pricingPlan in pricingPlans"
        :key="pricingPlan.uuid"
        :blok="pricingPlan.content"
        :slug="pricingPlan.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>
