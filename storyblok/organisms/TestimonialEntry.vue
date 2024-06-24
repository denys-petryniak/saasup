<script setup lang="ts">
import type { TestimonialEntryStoryblok } from '~/component-types-sb'

interface Props {
  blok: TestimonialEntryStoryblok
}

const props = defineProps<Props>()

const testimonialText = computed(() =>
  renderRichText(props.blok.text))
</script>

<template>
  <div
    v-editable="blok"
    class="testimonial"
  >
    <div
      class="testimonial__text"
      v-html="testimonialText"
    />
    <template
      v-if="blok.authors?.length"
    >
      <AuthorEntry
        v-for="author in blok.authors"
        :key="author._uid"
        :blok="author"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.testimonial {
  position: relative;
  color: $color-white--regular;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 0 50%;
    transform: translate3d(-50%, 0, 0);
    width: 40px;
    height: 40px;
    background: url('/images/quote.svg') no-repeat center/contain;
  }

  &__text {
    margin-top: $gap--sm;
    font-style: italic;
  }
}
</style>
