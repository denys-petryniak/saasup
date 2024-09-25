<script setup lang="ts">
import { AuthorArticle, AuthorTestimonial } from '#components'
import type { AuthorEntryStoryblok, AuthorStoryblok } from '~/component-types-sb'

interface Props {
  blok: AuthorStoryblok | AuthorEntryStoryblok
  variant?: 'article' | 'testimonial'
  slug?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'article',
})

const authorComponent = computed(() => {
  return props.variant === 'testimonial' ? AuthorTestimonial : AuthorArticle
})
</script>

<template>
  <component
    :is="authorComponent"
    :blok="blok"
    :slug="slug"
  />
</template>
