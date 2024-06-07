<script setup lang="ts">
import type { PageStoryblok } from '~/component-types-sb'

interface Props {
  blok: PageStoryblok
}

defineProps<Props>()
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="bodyItem in blok.body"
      :key="bodyItem._uid"
      :blok="bodyItem"
    />
  </div>
</template>
