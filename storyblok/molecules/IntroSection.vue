<script setup lang="ts">
import type { IntroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: IntroSectionStoryblok
}

const props = defineProps<Props>()

const introDescription = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="intro-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :title="blok.heading"
      :title-level="blok.heading_level"
      :description="introDescription"
    />
  </BaseSection>
</template>
