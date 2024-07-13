<script setup lang="ts">
import type { AuthorStoryblok } from '~/component-types-sb'
import { AuthorArticle, AuthorTestimonial } from '#components'

interface Props {
  blok: AuthorStoryblok
  variant?: 'testimonial' | 'article'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'article',
})

const authorComponent = computed(() => {
  return props.variant === 'testimonial' ? AuthorTestimonial : AuthorArticle
})
</script>

<template>
  <component :is="authorComponent" :blok="blok" />
</template>
