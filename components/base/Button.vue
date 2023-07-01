<script setup lang="ts">
import type { RouteLocation } from '#vue-router'

const props = defineProps<Props>()

interface Props {
  to?: string | RouteLocation
}

const NuxtLink = resolveComponent('NuxtLink')
const getTag = computed(() => props.to ? NuxtLink : 'button')
const getType = computed(() => props.to ? undefined : 'button')
</script>

<template>
  <component
    :is="getTag"
    :type="getType"
    :to="to"
    class="btn"
  >
    <slot />
  </component>
</template>
