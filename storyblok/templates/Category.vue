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
      <DynamicTitle
        v-if="blok.heading"
        :as="blok.heading_level"
      >
        {{ $t('blog.category') }}: <span class="category__heading">{{ blok.heading }}</span>
      </DynamicTitle>
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
    color: $primary-color--light;
  }
}
</style>
