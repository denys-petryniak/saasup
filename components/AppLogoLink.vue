<script setup lang="ts">
import type { ImageLoading } from '~/types'

interface Props {
  src?: string
  width?: string
  height?: string
  alt?: string
  loading?: ImageLoading
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'eager',
})

const src = computed(() => {
  return props.src || '/images/saasup-logo.svg'
})

const width = computed(() => {
  return Number(props.width) || 173
})

const height = computed(() => {
  return Number(props.height) || 41
})

const alt = computed(() => {
  return props.alt || 'SaaSup App Logo'
})
</script>

<template>
  <NuxtLink to="/">
    <img
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
      :loading="loading"
    >
  </NuxtLink>
</template>
