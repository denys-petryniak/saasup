<script setup lang="ts">
import type { AuthorEntryStoryblok, AuthorStoryblok } from '~/component-types-sb'
import { AuthorArticle, AuthorTestimonial } from '#components'

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
