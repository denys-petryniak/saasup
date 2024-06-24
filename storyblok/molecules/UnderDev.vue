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
      :heading="blok.heading"
      :heading-level="blok.heading_level ?? 'h1'"
      :header-description="description"
      :align="blok.alignment ?? 'center'"
    />
  </BaseSection>
</template>
