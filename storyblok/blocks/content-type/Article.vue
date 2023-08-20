<script setup>
const props = defineProps({ blok: Object })

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
