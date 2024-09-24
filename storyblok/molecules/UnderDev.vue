<script setup lang="ts">
import type { UnderDevStoryblok } from '~/component-types-sb'

interface Props {
  blok: UnderDevStoryblok
}

const props = defineProps<Props>()

const description = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <BaseSection
    v-editable="blok"
  >
    <ContentBlock
      v-if="blok.heading"
      :title="blok.heading"
      :title-level="blok.heading_level ?? 'h1'"
      :description="description"
    />
  </BaseSection>
</template>
