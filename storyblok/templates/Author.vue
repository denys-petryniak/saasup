<script setup lang="ts">
import type { AuthorStoryblok } from '~/component-types-sb'

interface Props {
  blok: AuthorStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection v-editable="blok">
    <div class="author__header">
      <DynamicHeading
        v-if="blok.name"
        :as="blok.heading_level"
      >
        Posts By: <span class="author__name">{{ blok.name }}</span>
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
.author {
  &__header {
    text-align: center;
  }

  &__name {
    color: $color-primary--light;
  }
}
</style>
