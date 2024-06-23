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
      v-if="blok.title"
      :heading="blok.title"
      :heading-level="blok.title_level"
      :description="introDescription"
      :align="blok.alignment ?? 'center'"
    />
  </BaseSection>
</template>
