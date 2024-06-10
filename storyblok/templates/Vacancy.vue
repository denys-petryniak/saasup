<script setup lang="ts">
import type { VacancyStoryblok } from '~/component-types-sb'

interface Props {
  blok: VacancyStoryblok
}

const props = defineProps<Props>()

const resolvedRichText = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <article v-editable="blok">
    <BaseSection>
      <h1>{{ blok.title }}</h1>
      <div v-html="resolvedRichText" />
    </BaseSection>
  </article>
</template>
