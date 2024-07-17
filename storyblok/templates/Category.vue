<script setup lang="ts">
import type { CategoryStoryblok } from '~/component-types-sb'

interface Props {
  blok: CategoryStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection v-editable="blok">
    <div class="category__header">
      <DynamicHeading
        v-if="blok.heading"
        :as="blok.heading_level"
      >
        Category: <span class="category__heading">{{ blok.heading }}</span>
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
.category {
  &__header {
    text-align: center;
  }

  &__heading {
    color: $color-primary--light;
  }
}
</style>
