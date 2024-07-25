<script setup lang="ts">
import type { PricingPlanPageStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingPlanPageStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection v-editable="blok">
    <div class="pricing-plan__header">
      <DynamicHeading
        v-if="blok.heading"
        :as="blok.heading_level"
      >
        {{ blok.heading }}
      </DynamicHeading>
    </div>
  </BaseSection>
  <StoryblokComponent
    v-for="item in blok.body"
    :key="item._uid"
    :blok="item"
  />
</template>

<style scoped lang="scss">
.pricing-plan {
  &__header {
    text-align: center;
  }
}
</style>
