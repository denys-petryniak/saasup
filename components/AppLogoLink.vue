<script setup lang="ts">
import type { ImageLoading } from '~/types'

interface Props {
  loading?: ImageLoading
}

withDefaults(defineProps<Props>(), {
  loading: 'eager',
})
</script>

<template>
  <NuxtLink to="/">
    <img
      src="~/assets/images/saasup-logo.svg"
      width="173"
      height="41"
      alt="SaaSup logo"
      :loading="loading"
    >
  </NuxtLink>
</template>
