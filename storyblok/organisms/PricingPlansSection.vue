<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { PricingPlanPageStoryblok, PricingPlansSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingPlansSectionStoryblok
}

const props = defineProps<Props>()

function isStoryblokStory(
  article: string | StoryblokStory<PricingPlanPageStoryblok>,
): article is StoryblokStory<PricingPlanPageStoryblok> {
  return typeof article !== 'string'
}

const typeCheckedPricingPlans = computed(() => {
  return (props.blok.pricing_plans ?? []).filter(isStoryblokStory)
})
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
  >
    <GridBox
      v-if="blok.pricing_plans?.length"
      :columns="blok.columns"
    >
      <PricingPlanCard
        v-for="pricingPlan in typeCheckedPricingPlans"
        :key="pricingPlan.uuid"
        :blok="pricingPlan.content"
        :slug="pricingPlan.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>
