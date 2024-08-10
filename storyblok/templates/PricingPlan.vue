<script setup lang="ts">
import type { PricingPlanStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingPlanStoryblok
}

const props = defineProps<Props>()

provide(pricingPlanGeneralDataInjectionKey, {
  price: props.blok.price,
  features: props.blok.features,
})
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="item in blok.body"
      :key="item._uid"
      :blok="item"
    />
  </div>
</template>
