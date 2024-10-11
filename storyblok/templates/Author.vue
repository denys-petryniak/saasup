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
      <DynamicTitle
        v-if="blok.name"
        :as="blok.heading_level"
      >
        {{ $t('blog.posts_by') }}: <span class="author__name">{{ blok.name }}</span>
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
.author {
  &__header {
    text-align: center;
  }

  &__name {
    color: $primary-color--light;
  }
}
</style>
