<script setup lang="ts">
import type { UnderDevStoryblok } from '~/component-types-sb'

interface Props {
  blok: UnderDevStoryblok
}

const props = defineProps<Props>()

const getDescription = computed(() =>
  renderRichText(props.blok.description),
)
</script>

<template>
  <BaseSection
    v-editable="blok"
  >
    <h1>
      {{ blok.heading }}
    </h1>
    <div
      v-html="getDescription"
    />
  </BaseSection>
</template>
